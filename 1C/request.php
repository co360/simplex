<?php

require_once __DIR__ . '/exchange/exchange.class.php';
require_once __DIR__ . '/exchange/exchange.model.php';
require_once dirname(__DIR__) . '/config.php';
require_once __DIR__ . '/Exception/InvalidJsonException.php';

define('MODULE_URL', HTTP_SERVER . 'index.php?route=api/exchange/');

/**
 * Class Request
 */
class Request {
    /**
     * @var int Successful Task counter
     */
    private $successful_tasks = 0;
    /**
     * @var int Skipped tasks counter
     */
    private $skipped_tasks = 0;
    /**
     * @var bool New product flag
     */
    private $flag = true;
    /**
     * @var Exchange 1C connection
     */
    private $connection;
    /**
     * @var ModelExchange
     */
    private $model;
    /**
     * @var false|resource Previous json
     */
    private $file;
    /**
     * @var string Previous json path
     */
    private $filename;
    /**
     * @var false|resource
     */
    private $logFile;
    
    /**
     * Request constructor.
     *
     * @throws Exception
     */
    public function __construct() {
        $this->connection = new Exchange(MODULE_URL . 'getModuleConfig');
        $this->model = new ModelExchange(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT);
        $this->filename = 'json/previous.json';
        $this->file = fopen($this->filename, 'r+');
        $this->logFile = fopen("log/1c_log.log", "a+");
    }
    
    /**
     * Main action method.
     * Gets data and writes it into database, if changes found
     *
     * @throws InvalidJsonException
     */
    public function makeRequest() {
        $decoded_json = json_decode($this->connection->request1C(), true);
        if(!isset($decoded_json)) {
            throw new InvalidJsonException("JSON not received or is invalid");
        }
        
        if(filesize($this->filename) == 0) {
            if(isset($decoded_json)) {
                fwrite($this->file, json_encode($decoded_json));
                self::rewriteJSONData($decoded_json);
                foreach($decoded_json as $d_json) {
                    if($d_json['quantity'] >= 0 && strlen($d_json['quantity']) > 0 && strlen($d_json['model']) > 0 && strlen($d_json['price']) > 0 && $d_json['price'] > 0 && strlen($d_json['sku']) > 0) {
                        $this->model->update($d_json);
                        $this->successful_tasks++;
                    }
                    echo $this->successful_tasks . ' of ' . count($decoded_json) . "\n";
                }
            }
        } else {
            $previous_json = json_decode(file_get_contents($this->filename), true);
            
            if(isset($decoded_json) && isset($previous_json)) {
                fwrite($this->file, json_encode($decoded_json));
                self::rewriteJSONData($previous_json);
                self::rewriteJSONData($decoded_json);
                foreach($decoded_json as $d_json) {
                    if($d_json['quantity'] >= 0 && strlen($d_json['quantity']) > 0 && strlen($d_json['model']) > 0 && strlen($d_json['price']) > 0 && $d_json['price'] > 0 && strlen($d_json['sku']) > 0) {
                        foreach($previous_json as $p_json) {
                            if($d_json['sku'] == $p_json['sku']) {
                                $this->flag = false;
                                
                                if($d_json['quantity'] == $p_json['quantity'] && $d_json['price'] == $p_json['price']) {
                                    $this->skipped_tasks++;
                                    break;
                                } else {
                                    $this->successful_tasks++;
                                    $this->model->update($d_json);
                                    $this->log($d_json);
                                }
                            }
                        }
                        if($this->flag) {
                            $this->successful_tasks++;
                            $this->model->update($d_json);
                            $this->log($d_json);
                        }
                    }
                    echo $this->successful_tasks . ' of ' . count($decoded_json) . "\n";
                    echo "Skipped " . $this->skipped_tasks . ' of ' . count($decoded_json) . "\n\n";
                    $this->flag = true;
                }
            }
        }
    }
    
    /**
     * Rewrites json data as it fits to tables
     *
     * @param array $array
     */
    protected static function rewriteJSONData(&$array) {
        $data = [];
        
        foreach($array['#value']['row'] as $index => $arr) {
            $data[$index]['sku'] = $arr[0]['#value'];
            $data[$index]['model'] = $arr[1]['#value'];
            $data[$index]['quantity'] = $arr[2]['#value'];
            $data[$index]['product_description'][1]['name'] = $arr[3]['#value'];
            $data[$index]['product_description'][2]['name'] = $arr[3]['#value'];
            $data[$index]['price'] = $arr[4]['#value'];
        }
        
        $array = $data;
    }
    
    /**
     * Logs changes in database
     *
     * @param string $product_json
     */
    public function log($product_json) {
        fwrite($this->logFile, "[" . date("Y-m-d H:m:s", time()) . "]" . json_encode($product_json));
    }
    
    /**
     * Restores previous state of database
     */
    public function restorePrevious() {
        if(isset($previous_json)) {
            self::rewriteJSONData($previous_json);
            foreach($previous_json as $p_json) {
                $this->successful_tasks++;
                $this->model->update($p_json);
                echo $this->successful_tasks . ' of ' . count($previous_json) . "\n";
            }
        }
    }
    
    /**
     * Request destructor
     * Close files, connection. After all optimizations
     */
    public function __destruct() {
        fclose($this->file);
        
        echo "Optimizing tables \n";
        
        $this->model->optimize([
            'product',
            'product_description'
        ]);
        fclose($this->logFile);
    }
}

$request = new Request();
if(strpos(ini_get("disable_functions"), "exec") !== false) {
    exec("mysqldump -u" . DB_USERNAME . " -p" . DB_PASSWORD . " " . DB_DATABASE . " > " . date("Y-m-d") . DB_DATABASE . ".sql");
}
$request->makeRequest();