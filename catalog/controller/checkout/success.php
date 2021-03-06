<?php

class ControllerCheckoutSuccess extends Controller
{
    public function index()
    {
        $this->load->language('checkout/success');
        $this->load->model('checkout/order');
        $this->load->model('api/exchange');

        if (isset($this->session->data['order_id'])) {
            if ($this->config->get('module_exchange_status')) {
                $order = $this->model_api_exchange->getOrder($this->session->data['order_id']);
                $order['products'] = $this->model_api_exchange->getOrderProducts($this->session->data['order_id']);
                $this->model_api_exchange->sendOrder(
                    $this->config->get('module_exchange_send_url'),
                    json_encode($order),
                    $this->config->get('module_exchange_login'),
                    $this->config->get('module_exchange_password')
                );
            }
            $this->cart->clear();

            unset($this->session->data['shipping_method']);
            unset($this->session->data['shipping_methods']);
            unset($this->session->data['payment_method']);
            unset($this->session->data['payment_methods']);
            unset($this->session->data['guest']);
            unset($this->session->data['comment']);
            $data['order_id'] = $this->session->data['order_id'];
            unset($this->session->data['order_id']);
            unset($this->session->data['coupon']);
            unset($this->session->data['reward']);
            unset($this->session->data['voucher']);
            unset($this->session->data['vouchers']);
            unset($this->session->data['totals']);
        }
        $this->document->setTitle($this->language->get('heading_title'));

        $data['breadcrumbs'] = array();

        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_home'),
            'href' => $this->url->link('common/home')
        );

        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_basket'),
            'href' => $this->url->link('checkout/cart')
        );

        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_checkout'),
            'href' => $this->url->link('checkout/checkout', '', true)
        );

        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_success'),
            'href' => $this->url->link('checkout/success')
        );

        if (isset($data['order_id'])) {
            if ($this->customer->isLogged()) {
                $data['text_message'] = sprintf(
                    $this->language->get('text_customer'),
                    $this->url->link('account/account', '', true),
                    $this->url->link('account/order', '', true),
                    $this->url->link('information/contact')
                );
            } else {
                $data['text_message'] = sprintf(
                    $this->language->get('text_guest'),
                    $this->url->link('information/contact')
                );
            }
        } else {
            $data['text_message'] = $this->language->get('text_error');
        }

        $data['continue'] = $this->url->link('common/home');

        $data['column_left'] = $this->load->controller('common/column_left');
        $data['column_right'] = $this->load->controller('common/column_right');
        $data['content_top'] = $this->load->controller('common/content_top');
        $data['content_bottom'] = $this->load->controller('common/content_bottom');
        $data['footer'] = $this->load->controller('common/footer');
        $data['header'] = $this->load->controller('common/header');
        //IT-LAB
        $this->response->setOutput($this->load->view('common/success_order', $data));
    }
}
