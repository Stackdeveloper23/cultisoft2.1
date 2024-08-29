<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Product;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CartController extends Controller
{


    public function show()
    {
        $cart = Cart::where('user_id', Auth::id())->with('items.product')->firstOrFail();
        return response()->json($cart);
    }

    public function add(Request $request, $productId)
    {
        $cart = Cart::firstOrCreate(['user_id' => Auth::id()]);

        $cartItem = $cart->items()->firstOrCreate(['product_id' => $productId], [
            'quantity' => 1
        ]);

        if (!$cartItem->wasRecentlyCreated) {
            $cartItem->increment('quantity');
        }

        return response()->json($cartItem);
    }

    public function remove($itemId)
    {
        $cartItem = CartItem::findOrFail($itemId);
        $cartItem->delete();

        return response()->json(['success' => true]);
    }

    public function clear()
    {
        $cart = Cart::where('user_id', Auth::id())->firstOrFail();
        $cart->items()->delete();

        return response()->json(['success' => true]);
    }

    public function updateQuantity(Request $request, $itemId)
{
    Log::info("Intentando actualizar el item con ID: {$itemId}");

    // Validar la cantidad ingresada
    $request->validate([
        'quantity' => 'required|integer|min:1'
    ]);

    // Encontrar el item en el carrito
    $cartItem = CartItem::where('id', $itemId)
        ->whereHas('cart', function ($query) {
            $query->where('user_id', Auth::id());
        })
        ->firstOrFail();

    // Actualizar la cantidad
    $cartItem->quantity = $request->input('quantity');
    $cartItem->save();

    return response()->json($cartItem);
}


}
