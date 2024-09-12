<?php

namespace App\Services;

use App\Exceptions\MercadoPagoException;
use App\Models\Cart;
use App\Models\Compra;
use MercadoPago\Client\Preference\PreferenceClient;
use MercadoPago\Exceptions\MPApiException;
use MercadoPago\MercadoPagoConfig;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class MercadoPagoService {

    public function __construct()
    {
        try {
            //$mpAccessToken = env('MERCADO_PAGO_ACCESS_TOKEN', 'valor_predeterminado');
           
            MercadoPagoConfig::setAccessToken('APP_USR-3959523974557388-061114-ead28a742613cf1cdd5649b6b6e2bca7-1851796347');
        } catch (\Exception $e) {
            throw new MercadoPagoException();
        }
    }
    

    public function createPrefrencia(Compra $compra)
{
    // Obtener el carrito asociado a la compra
    $cart = Cart::where('user_id', Auth::id())->with('items.product')->first();

    Log::info('Items del carrito: ' . json_encode($cart));
    if (!$cart) {
        throw new Exception('No se encontró el carrito asociado a esta compra.');
    }

    $client = new PreferenceClient();

    // Crear los ítems para la preferencia de Mercado Pago
   $items = $cart->items->reduce(function (array $acc, $item) {
        // Convertir el precio a flotante
        $price = (float) $item->product->price;

        // Validar que el precio no sea null o 0
        if ($price <= 0) {
            Log::error('El precio del producto es :', [
                'product_id' => $item->product->id,
                'product_name' => $item->product->name,
                'price' => $item->product->price,
            ]);
            throw new Exception('El precio del producto debe ser un valor válido.');
        }

        $acc[] = [
            "title" => $item->product->name,
            'quantity' => $item->quantity,
            "unit_price" => $price,
        ];

        return $acc;
    }, []);

    Log::info('Items para la preferencia de Mercado Pago: ' . json_encode($items));

    try {
        $preference = $client->create([
            'external_reference' => $compra->id,
            'items' => $items,
        ]);
    } catch (MPApiException $MPApiException) {
        Log::error('Error al crear preferencia en Mercado Pago', [
            'message' => $MPApiException->getMessage(),
            'status_code' => $MPApiException->getStatusCode(),
            'response' => $MPApiException->getApiResponse(),
        ]);
        throw new MercadoPagoException(
            'Error al crear la preferencia en Mercado Pago: ' . $MPApiException->getMessage(), 
            $MPApiException->getStatusCode()
        );
    }

    return $preference;
}

}