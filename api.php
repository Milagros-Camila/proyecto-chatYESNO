<?php
header ("Access-Control-Allow-Origin: *");


$metodo = $_SERVER['REQUEST_METHOD']; //metodo

$respuesta = [];
switch ($metodo) {
    case 'GET':
        $respuesta = ['mesaje' =>'Metodo GET correcto',
        'data' => $_GET
    ];
        break;
    case 'POST':
        $data_entrante = json_decode(file_get_contents("php://input"),true); //convertimos de JSON a ARRAY, su funcion es capturar el body
        $respuesta = ['mesaje' =>'Metodo POST de retorno',
        'data' => $data_entrante,
        ];
        break;
    case 'PUT':
        $data_entrante = json_decode(file_get_contents("php://input"),true);
        $respuesta = ['mesaje' =>'Metodo PUT actualizado',
        'data' => $data_entrante,
        ];
        break;
    case 'DELETE':
        // Captura los datos enviados en la solicitud DELETE
        $input = json_decode(file_get_contents("php://input"), true);
        $respuesta = [
            'mensaje' => 'Método DELETE correcto',
            'data' => $input ? $input : $_GET  // Captura del cuerpo o parámetros de la URL
        ];
        break;
    
    default:
        
        break;
}
    
    echo json_encode($respuesta);  // Envía la respuesta en formato JSON
    ?>