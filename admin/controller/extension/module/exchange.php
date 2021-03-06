<?php
class ControllerExtensionModuleExchange extends Controller {
	public function index() {
		$this->load->language('extension/module/exchange');
		$data['heading_title'] = $this->language->get('heading_title');
		$this->document->setTitle($this->language->get('heading_title'));

		$this->load->model('setting/setting');

		if(($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validate()) {
			$this->model_setting_setting->editSetting('module_exchange', $this->request->post);

			$this->session->data['success'] = $this->language->get('text_success');

			$this->response->redirect($this->url->link('marketplace/extension', 'user_token=' . $this->session->data['user_token'] . '&type=module', true));
		}

		if(isset($this->error['warning'])) {
			$data['error_warning'] = $this->error['warning'];
		} else {
			$data['error_warning'] = '';
		}

		$data['breadcrumbs'] = array();

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('text_home'),
			'href' => $this->url->link('common/dashboard', 'user_token=' . $this->session->data['user_token'], true)
		);

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('text_extension'),
			'href' => $this->url->link('marketplace/extension', 'user_token=' . $this->session->data['user_token'] . '&type=module', true)
		);

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('heading_title'),
			'href' => $this->url->link('extension/module/exchange', 'user_token=' . $this->session->data['user_token'], true)
		);

		$data['action'] = $this->url->link('extension/module/exchange', 'user_token=' . $this->session->data['user_token'], true);

		$data['cancel'] = $this->url->link('marketplace/extension', 'user_token=' . $this->session->data['user_token'] . '&type=module', true);

		if(isset($this->request->post['module_exchange_status'])) {
			$data['module_exchange_status'] = $this->request->post['module_exchange_status'];
		} else {
			$data['module_exchange_status'] = $this->config->get('module_exchange_status');
		}

		if(isset($this->request->post['module_exchange_receive_url'])) {
			$data['module_exchange_receive_url'] = $this->request->post['module_exchange_receive_url'];
		} else {
			$data['module_exchange_receive_url'] = $this->config->get('module_exchange_receive_url');
		}

		if(isset($this->request->post['module_exchange_send_url'])) {
			$data['module_exchange_send_url'] = $this->request->post['module_exchange_send_url'];
		} else {
			$data['module_exchange_send_url'] = $this->config->get('module_exchange_send_url');
		}

		if(isset($this->request->post['module_exchange_categories_import_url'])) {
			$data['module_exchange_categories_import_url'] = $this->request->post['module_exchange_categories_import_url'];
		} else {
			$data['module_exchange_categories_import_url'] = $this->config->get('module_exchange_categories_import_url');
		}

		if(isset($this->request->post['module_exchange_login'])) {
			$data['module_exchange_login'] = $this->request->post['module_exchange_login'];
		} else {
			$data['module_exchange_login'] = $this->config->get('module_exchange_login');
		}

		if(isset($this->request->post['module_exchange_password'])) {
			$data['module_exchange_password'] = $this->request->post['module_exchange_password'];
		} else {
			$data['module_exchange_password'] = $this->config->get('module_exchange_password');
		}

		$data['header'] = $this->load->controller('common/header');
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['footer'] = $this->load->controller('common/footer');


		$this->response->setOutput($this->load->view('extension/module/exchange', $data));
	}

	protected function validate() {
		if(!$this->user->hasPermission('modify', 'extension/module/exchange')) {
			$this->error['warning'] = $this->language->get('error_permission');
		}

		return !$this->error;
	}

	protected function request() {
		$connection = new Exchange($this->url, $this->login, $this->password);

		return json_decode($connection->request(), true);
	}
}
