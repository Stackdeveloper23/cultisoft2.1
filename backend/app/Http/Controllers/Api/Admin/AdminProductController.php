<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use NumberFormatter;

class AdminProductController extends Controller
{
    public function index(){

        $products = Product::All();
      return response()->json($products,200);
      }

      public function ProductCount(){

        $productos = Product::All();

       $totalProductos = $productos->count(); 

      return response()->json($totalProductos,200);
      }

      public function show($id)
{
    $product = Product::find($id);

    if (!$product) {
        return response()->json(['message' => 'producto no encontrado'], 404);
    }

    return response()->json($product, 200);
}

public function create(Request $request)
{
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'status' => 'required|string',
        'description' => 'required|string',
        'price' => 'required|numeric|regex:/^\d+(\.\d{1,2})?$/',
        'image_path' => 'required|string',
        'category_id' => 'required|exists:categories,id',
    ]);
Log::info('producto datos:', $validatedData);

    DB::beginTransaction();

    try {
        $product = Product::create($validatedData);

        DB::commit();

        return response()->json($product, 201);
    } catch (\Exception $e) {
        DB::rollBack();

        // Registrar el error
        Log::error('Error creando producto: ' . $e->getMessage(), [
            'exception' => $e,
            'request_data' => $request->all(),
        ]);

        // Retornar una respuesta de error
        return response()->json(['error' => 'Fallo al crear el producto'], 500);
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
