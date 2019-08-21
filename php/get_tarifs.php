<?php

function route($method, $urlData, $formData) {
    
    $api_method = array_slice($formData, 0);
    
    if ($method === 'GET' && $formData['q'] === 'api/get_tarifs/') {
        
   
        $ch = curl_init("http://sknt.ru/job/frontend/data.json");                                                                      
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
        curl_setopt($ch, CURLOPT_POSTREDIR, 3);                                                                  
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                 
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); 
        $dataJson = json_decode(curl_exec($ch)); 
        
        echo json_encode(array(
            'method' => 'GET',
            'result' => $dataJson
        ));
 
        return;
    } else {
        header('HTTP/1.0 400 Bad Request');
        echo json_encode(array(
            'error' => 'Bad Request - no such api request'
        ));
    }
 
    // Возвращаем ошибку
    
 
}