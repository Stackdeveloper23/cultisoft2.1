<?php

namespace App\Http\Controllers;

use Google\Cloud\Dialogflow\V2\SessionsClient;
use Illuminate\Http\Request;

class ChatbotController extends Controller
{
   public function handleRequest(Request $request)
    {
        $message = $request->input('message');

        // Ejemplo de respuestas básicas
        $responses = [
        'horario' => 'Nuestro horario de atención es de 9:00 a 17:00, de lunes a viernes.',
        'envio' => 'Los envíos se realizan dentro de 3 a 5 días hábiles.',
        "costo envio" => 'EL envio tiene un costo de $20.000',
        'flores' => 'Tenemos una amplia variedad de flores y ramos disponibles. Puedes visitar nuestra tienda en línea para ver todos los productos.',
        'precio' => 'Los precios varían según el tipo y tamaño del ramo. Puedes consultar todos los precios en nuestra tienda en línea.',
        'pago' => 'Aceptamos pagos con tarjeta de crédito, débito, y transferencias bancarias.',
        'pagar' => 'Aceptamos pagos con tarjeta de crédito, débito, y transferencias bancarias.',
        'devolucion' => 'Aceptamos devoluciones dentro de los primeros 7 días si el producto no cumple con tus expectativas. Consulta nuestra política de devoluciones para más detalles.',
        'descuento' => 'Actualmente tenemos ofertas especiales. ¡Revisa nuestra sección de promociones para aprovechar los descuentos disponibles!',
        'entrega' => 'El tiempo de entrega estándar es de 3 a 5 días hábiles. Ofrecemos opciones de entrega exprés en ciertas áreas.',
        'disponible' => 'Algunos productos pueden estar agotados debido a la alta demanda. Te recomendamos revisar la disponibilidad en nuestra tienda en línea.',
        'recomendar' => 'Si buscas recomendaciones, nuestros ramos de rosas y lirios son muy populares. Contáctanos para una consulta personalizada.',
        'personalizar' => 'Podemos personalizar ramos para ocasiones especiales. Por favor, contáctanos con tus requisitos específicos.',
        'contacto' => 'Si necesitas asistencia adicional, puedes comunicarte con nuestro servicio al cliente a través del chat en vivo o enviando un correo a soporte@florestienda.com.',
        'contactar' => 'Si necesitas asistencia adicional, puedes comunicarte con nuestro servicio al cliente a través del chat en vivo o enviando un correo a soporte@florestienda.com.',
        'hola' => '¡Hola! ¿En qué puedo ayudarte hoy?',
        ];

        // Busca una respuesta adecuada
        $response = $responses[strtolower($message)] ?? 'Lo siento, no entiendo tu pregunta. ¿Puedes reformularla?';

        foreach ($responses as $keyword => $reply) {
            if (stripos($message, $keyword) !== false) {
                $response = $reply;
                break;
            }
        }

        return response()->json(['response' => $response]);
    }
   /* public function handleRequest(Request $request)
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
    }*/
}
