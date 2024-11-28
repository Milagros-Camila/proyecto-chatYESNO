<?php
header ("Access-Control-Allow-Origin: *");


$metodo = $_SERVER['REQUEST_METHOD']; 

$respuesta = [];
switch ($metodo) {
    case 'GET':
        $respuesta = ['mesaje' =>'Metodo GET correcto',
        'data' => $_GET
    ];
        break;
    case 'POST':
        $data_entrante = json_decode(file_get_contents("php://input"),true);
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
        $input = json_decode(file_get_contents("php://input"), true);
        $respuesta = [
            'mensaje' => 'Método DELETE correcto',
            'data' => $input ? $input : $_GET  
        ];
        break;
    
    default:
        
        break;
}
    
    echo json_encode($respuesta);
    ?>
