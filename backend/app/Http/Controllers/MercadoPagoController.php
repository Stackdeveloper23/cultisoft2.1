<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use MercadoPago\Client\Preference\PreferenceClient;
use MercadoPago\Exceptions\MPApiException;
use MercadoPago\MercadoPagoConfig;

class MercadoPagoController extends Controller
{
    protected function authenticate()
    {
        $mpAccessToken = env('MERCADOPAGO_ACCESS_TOKEN');
        MercadoPagoConfig::setAccessToken($mpAccessToken);
        MercadoPagoConfig::setRuntimeEnviroment(MercadoPagoConfig::LOCAL);
    }

    public function createPaymentPreference(Request $request)
    {
        $this->authenticate();

        $product = [
            "id" => "1234567890",
            "title" => $request->input('title'),
            "description" => "Descripción del Producto",
            "currency_id" => "BRL",
            "quantity" => $request->input('quantity'),
            "unit_price" => $request->input('price')
        ];

        $items = [$product];

        $payer = [
            "name" => "Nombre",
            "surname" => "Apellido",
            "email" => "correo@ejemplo.com",
        ];

        $requestPayload = $this->createPreferenceRequest($items, $payer);

        $client = new PreferenceClient();

        try {
            $preference = $client->create($requestPayload);
            return response()->json($preference);
        } catch (MPApiException $error) {
            Log::error('MercadoPago API Error: ' . $error->getMessage(), [
                'exception' => $error,
                'request_payload' => $requestPayload,
            ]);
            return response()->json([
                'error' => $error->getMessage(),
                'details' => $error->getTraceAsString() // Agregar traza para detalles
            ], 500);
        }
    }

    private function createPreferenceRequest($items, $payer): array
    {
        $paymentMethods = [
            "excluded_payment_methods" => [],
            "installments" => 12,
            "default_installments" => 1
        ];

        $backUrls = [
            'success' => route('mercadopago.success'),
            'failure' => route('mercadopago.failed')
        ];

        return [
            "items" => $items,
            "payer" => $payer,
            "payment_methods" => $paymentMethods,
            "back_urls" => $backUrls,
            "statement_descriptor" => "NOMBRE_EN_EL_RESUMEN",
            "external_reference" => "1234567890",
            "expires" => false,
            "auto_return" => 'approved',
        ];
    }
}