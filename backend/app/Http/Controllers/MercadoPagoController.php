<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use MercadoPago\Client\Preference\PreferenceClient;
use MercadoPago\Exceptions\MPApiException;
use MercadoPago\MercadoPagoConfig;

class MercadoPagoController extends Controller
{
    protected function authenticate()
    {
        $mpAccessToken = env('MERCADO_PAGO_ACCESS_TOKEN');
        MercadoPagoConfig::setAccessToken($mpAccessToken);
        MercadoPagoConfig::setRuntimeEnviroment(MercadoPagoConfig::LOCAL);
    }

    public function createPaymentPreference(Request $request): JsonResponse
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
}