<?php
class ControllerCommonFooter extends Controller {
	public function index() {
		$this->load->language('common/footer');

		$this->load->model('catalog/information');

		$data['informations'] = array();

		foreach ($this->model_catalog_information->getInformations() as $result) {
			if ($result['bottom']) {
				$data['informations'][] = array(
					'title' => $result['title'],
					'href'  => $this->url->link('information/information', 'information_id=' . $result['information_id'])
				);
			}
		}

		$data['contact'] = $this->url->link('information/contact');
		$data['return'] = $this->url->link('account/return/add', '', true);
		$data['sitemap'] = $this->url->link('information/sitemap');
		$data['tracking'] = $this->url->link('information/tracking');
		$data['manufacturer'] = $this->url->link('product/manufacturer');
		$data['voucher'] = $this->url->link('account/voucher', '', true);
		$data['affiliate'] = $this->url->link('affiliate/login', '', true);
		$data['special'] = $this->url->link('product/special');
		$data['account'] = $this->url->link('account/account', '', true);
		$data['order'] = $this->url->link('account/order', '', true);
		$data['wishlist'] = $this->url->link('account/wishlist', '', true);
		$data['newsletter'] = $this->url->link('account/newsletter', '', true);

		$data['powered'] = sprintf($this->language->get('text_powered'), $this->config->get('config_name'), date('Y', time()));

		// Whos Online
		if ($this->config->get('config_customer_online')) {
			$this->load->model('tool/online');

			if (isset($this->request->server['REMOTE_ADDR'])) {
				$ip = $this->request->server['REMOTE_ADDR'];
			} else {
				$ip = '';
			}

			if (isset($this->request->server['HTTP_HOST']) && isset($this->request->server['REQUEST_URI'])) {
				$url = ($this->request->server['HTTPS'] ? 'https://' : 'http://') . $this->request->server['HTTP_HOST'] . $this->request->server['REQUEST_URI'];
			} else {
				$url = '';
			}

			if (isset($this->request->server['HTTP_REFERER'])) {
				$referer = $this->request->server['HTTP_REFERER'];
			} else {
				$referer = '';
			}

			$this->model_tool_online->addOnline($ip, $this->customer->getId(), $url, $referer);
		}

		$data['scripts'] = $this->document->getScripts('footer');
        /* added by it-lab start */
        $this->load->model('extension/menu/megamenu');
        $this->load->model('localisation/location');
        $data['about']=$this->model_extension_menu_megamenu->getSubMenu('about');
        $data['catalog'] = $this->model_extension_menu_megamenu->getSubMenu('catalog');
        $data['telephone'] = $this->config->get('config_telephone');
		$this->load->model('catalog/category');
		$catalog_tree = $this->model_catalog_category->getCatalogTree();
		$catalog_first_level=[];
		foreach ($catalog_tree as &$catalog_item) {
            if ($catalog_item['depth'] == 0) {
                $catalog_item['href'] = $this->url->link("product/category", ['path' => $catalog_item['path']]);
                $catalog_first_level[] = $catalog_item;
            }
        }

		$this->load->language('product/special');
		$data['catalog_first_level']= $catalog_first_level;
		$data['catalog_first_level']['oferte'] = [
			'href' => $this->url->link("product/special"),
			'name' => $this->language->get('offers'),
		];
		/* added by it-lab* start end */
        //$data['locations']=$this->model_localisation_location->getLocationDescriptions();
        $locations = $this->model_localisation_location->getLocationDescriptions();
        foreach ($locations as &$location){
            if(!$location['is_online']){
                $location['contacts_link']=$data['contact']."#location-{$location['location_id']}";
                $data['locations'][]=$location;
            }else{
                $data['open'] = html_entity_decode($location['open'], ENT_QUOTES, 'UTF-8');
            }

        }
        /* added by it-lab end */
        return $this->load->view('common/footer', $data);
	}
}
