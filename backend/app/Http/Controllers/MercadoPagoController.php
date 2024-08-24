<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use MercadoPago\Client\Preference\PreferenceClient;
use MercadoPago\Exceptions\MPApiException;
use MercadoPago\MercadoPagoConfig;
use MercadoPago\Resources\Preference;


class MercadoPagoController extends Controller
{
    protected function authenticate()
    {
        $mpAccessToken = env('MERCADO_PAGO_ACCESS_TOKEN');
        MercadoPagoConfig::setAccessToken($mpAccessToken);
        MercadoPagoConfig::setRuntimeEnviroment(MercadoPagoConfig::SERVER);
    }




   public function createPaymentPreference(): JsonResponse
    { 
        $this->authenticate();

        // Recupera el carrito del usuario autenticado
        $cart = Cart::where('user_id', Auth::id())->with('items.product')->firstOrFail();
    
        // Prepara los ítems para la solicitud
        $items = []; // Initialize an empty array
        foreach ($cart->items as $cartItem) {
            $items[] = [
                'title' => $cartItem->product->name, // Use product name from cart item
                'quantity' => $cartItem->quantity,
                'unit_price' => (float) $cartItem->product->price, // Cast to float
                'currency_id' => 'BRL',
            ];
        }
        Log::info('Items a enviar a MercadoPago:', $items);

        // Obtiene el usuario autenticado
        $user = Auth::user();
    
        // Prepara la información del comprador (payer)
        $payer = [
            'email' => $user->email,
        ];
    
        // Construye la solicitud
        $requestData = [
            'items' => $items,
            'payer' => $payer,
            'back_urls' => [
                'success' => route('mercadopago.success'),
                'failure' => route('mercadopago.failed'),
            ],
            'auto_return' => 'approved',
            "payment_methods" => [
                "installments" => 12,
                "default_installments" => 1,
            ],
            "external_reference" => uniqid(),
        ];
    
        try {
            // Crea la preferencia de pago usando el cliente de MercadoPago
            $client = new PreferenceClient();
            $preference = $client->create($requestData);
    
            // Devuelve la respuesta con el ID de la preferencia
            return response()->json(['data' => ['id' => $preference->id]]);
            // Esto te puede dar más información sobre el problema
} catch (MPPreferenceNotFoundException $e) {
    Log::error('La preferencia de pago no pudo ser encontrada: ' . $e->getMessage());
} catch (MPApiException $e) {
    Log::error('MercadoPago API Error', [
        'message' => $e->getMessage(),
        'code' => $e->getCode(),
    ]);
            // Responde con un mensaje de error genérico
            return response()->json(['error' => 'Hubo un problema al crear la preferencia de pago.'], 500);
        }
        }
    /*public function createPaymentPreference(Request $request): JsonResponse
{
    $this->authenticate();

    $items = [
        [
            'title' => 'Producto de prueba',
            'quantity' => 1,
            'unit_price' => 100.00,
            'currency_id' => 'BRL',
        ]
    ];

    Log::info('Items a enviar a MercadoPago:', $items);
    $payer = [
        'email' => 'test_user@test.com'
    ];

    $request = [
        'items' => $items,
        'payer' => $payer,
        'back_urls' => [
            'success' => route('mercadopago.success'),
            'failure' => route('mercadopago.failed'),
        ],
        'auto_return' => 'approved',
    ];

    try {
        $client = new PreferenceClient();
        $preference = $client->create($request);

        return response()->json(['data' => ['id' => $preference->id]]);
    } catch (MPApiException $e) {
        Log::error('MercadoPago API Error', [
            'message' => $e->getMessage(),
            'code' => $e->getCode(),
        ]);

        return response()->json(['error' => 'Hubo un problema al crear la preferencia de pago.'], 500);
    }
}
*/
    }