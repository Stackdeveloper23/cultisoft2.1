<?php

namespace App\Http\Controllers;

use App\Models\Compra;
use App\Services\MercadoPagoService;
use Illuminate\Http\JsonResponse;


class MercadoPagoController extends Controller
{

   protected $mercadoPagoService;

    public function __construct(MercadoPagoService $mercadoPagoService)
    {
        $this->mercadoPagoService = $mercadoPagoService;
    }

    public function createPaymentPreference(Compra $compra): JsonResponse
    {
        try {
            $preference = $this->mercadoPagoService->createPrefrencia($compra);

            return response()->json(['data' => ['id' => $preference->id]]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    
    }