<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Compra;
use App\Services\MercadoPagoService;
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

   protected $mercadoPagoService;

    // Inyección del servicio a través del constructor
    public function __construct(MercadoPagoService $mercadoPagoService)
    {
        $this->mercadoPagoService = $mercadoPagoService;
    }

    // Método para crear una preferencia de pago
    public function createPaymentPreference(Compra $compra): JsonResponse
    {
        try {
            // Llamada al servicio para crear la preferencia
            $preference = $this->mercadoPagoService->createPrefrencia($compra);

            // Devolver la respuesta JSON con el ID de la preferencia creada
            return response()->json(['data' => ['id' => $preference->id]]);
        } catch (\Exception $e) {
            // Manejar excepciones y devolver un error
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    
 


    }