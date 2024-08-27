<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AdminProductController extends Controller
{
    public function index(){

        $products = Product::All();
      return response()->json($products,200);
      }

      public function show($id)
{
    $product = Product::find($id);

    if (!$product) {
        return response()->json(['message' => 'procucto no encontrado'], 404);
    }

    return response()->json($product, 200);
}
public function create(Request $request)
{
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'status' => 'required|string|in:active,inactive',
        'description' => 'required|string',
        'price' => 'required|numeric|regex:/^\d+(\.\d{1,2})?$/',
        'quantity' => 'required|integer|min:1',
        'category_id' => 'required|exists:categories,id',
    ]);

    DB::beginTransaction();

    try {
        $product = Product::create($validatedData);
        DB::commit();
        return response()->json($product, 201);
    } catch (\Exception $e) {
        DB::rollBack();
        Log::error('Error creating product: ' . $e->getMessage(), [
            'exception' => $e,
            'request_data' => $request->all(),
        ]);
        return response()->json(['error' => 'Failed to create product'], 500);
    }
}


      public function update(Request $request, $id)
{
  $data = Product::find($id);
  $data->fill($request->all());
  $data->save();
  return response()->json($data, 200);
}

public function destroy($id){
    $data = Product::find($id);
    $data->delete();
    return response()->json('Delete', 200);
  }
}
