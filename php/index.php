<?php
/*ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);*/


$method = $_SERVER['REQUEST_METHOD'];
$formData = getFormData($method);

function getFormData($method) {
 
    if ($method === 'GET') return $_GET;
    if ($method === 'POST') return $_POST;
 
    $data = array();
    $exploded = explode('&', file_get_contents('php://input'));
 
    foreach($exploded as $pair) {
        $item = explode('=', $pair);
        if (count($item) == 2) {
            $data[urldecode($item[0])] = urldecode($item[1]);
        }
    }
 
    return $data;
}

$url = (isset($_GET['q'])) ? $_GET['q'] : '';
$url = rtrim($url, '/');
$urls = explode('/', $url);
$router = $urls[1];
$urlData = array_slice($urls, 2);

if (include_once('./' . $router . '.php')) {
    route($method, $urlData, $formData);
} else {
    header('HTTP/1.0 400 Bad Request');
    echo json_encode(array(
        'error' => 'Bad Request - no router'
    ));
}
//