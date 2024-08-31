<?php

namespace App\Http\Controllers;

use Google\Cloud\Dialogflow\V2\SessionsClient;
use Illuminate\Http\Request;

class ChatbotController extends Controller
{
   /* public function handleRequest(Request $request)
    {
        $message = $request->input('message');

        // Ejemplo de respuestas básicas
        $responses = [
            'hola' => '¡Hola! ¿En qué puedo ayudarte hoy?',
            'horario' => 'Nuestro horario de atención es de 9:00 a 18:00, de lunes a viernes.',
            'envio' => 'Los envíos se realizan dentro de 3 a 5 días hábiles.'
        ];

        // Busca una respuesta adecuada
        $response = $responses[strtolower($message)] ?? 'Lo siento, no entiendo tu pregunta. ¿Puedes reformularla?';

        return response()->json(['response' => $response]);
    }*/
    public function handleRequest(Request $request)
    {
        $userMessage = $request->input('message');

        // Configura el ID de sesión y el path al archivo de credenciales
     // Genera un ID único por usuario
  

        // Crea el cliente de sesiones de Dialogflow
        $sessionsClient = new SessionsClient([
            'credentials' => storage_path('credentials/chatbot-mgqf-ef12072c2d9a.json')
        ]);

        // Configura la sesión y el request a Dialogflow
        $session = $sessionsClient->sessionName('chatbot-mgqf','111397706003772499909'); // Cambia 'your-project-id'
        $textInput = (new \Google\Cloud\Dialogflow\V2\TextInput())
                        ->setText($userMessage)
                        ->setLanguageCode('es'); // Define el código de idioma

        $queryInput = (new \Google\Cloud\Dialogflow\V2\QueryInput())
                        ->setText($textInput);

        // Envía la solicitud a Dialogflow y recibe la respuesta
        $response = $sessionsClient->detectIntent($session, $queryInput);
        $fulfillmentText = $response->getQueryResult()->getFulfillmentText();

        // Cierra el cliente de sesiones
        $sessionsClient->close();

        return response()->json(['response' => $fulfillmentText]);
    }
}
