<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Compra;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CompraController extends Controller
{
    public function index(){

        $compras = Compra::All();
      return response()->json($compras,200);
      }

      public function show($id)
{
    $compras = Compra::find($id);

    if (!$compras) {
        return response()->json(['message' => 'procucto no encontrado'], 404);
    }

    return response()->json($compras, 200);
}
public function create(Request $request)
{
    $validatedData = $request->validate([
        'nombre' => 'required|string',
        'apellidos' => 'required|string',
        'departamento' => 'required|string',
        'ciudad' => 'required|string',
        'barrio' => 'required|string',
        'direccion' => 'required|string',
        'movil' => 'required|string',
        'movil2' => 'required|string',
        'referencias' => 'required|string',
    ]);


    $cart = Cart::where('user_id', Auth::id())->with('items.product')->first();

    if (!$cart) {
        return response()->json(['error' => 'No se encontró un carrito para este usuario.'], 404);
    }

    DB::beginTransaction();

    try {
        // Crear el nuevo registro en la base de datos, asignando el carts_id al ID del carrito del usuario
        $newRecord = Compra::create([
            'nombre' => $validatedData['nombre'],
            'apellidos' => $validatedData['apellidos'],
            'departamento' => $validatedData['departamento'],
            'ciudad' => $validatedData['ciudad'],
            'barrio' => $validatedData['barrio'],
            'direccion' => $validatedData['direccion'],
            'movil' => $validatedData['movil'],
            'movil2' => $validatedData['movil2'],
            'referencias' => $validatedData['referencias'],
            'carts_id' => $cart->id, 
        ]);

        DB::commit();

        return response()->json(['success' => 'Registro creado con éxito', 'data' => $newRecord], 201);
    } catch (\Exception $e) {
        DB::rollBack();
        return response()->json(['error' => 'Error al crear el registro: ' . $e->getMessage()], 500);
    }
}

      public function update(Request $request, $id)
{
  $data = Compra::find($id);
  $data->fill($request->all());
  $data->save();
  return response()->json($data, 200);
}

public function destroy($cartsId)
{
    $data = Compra::where('carts_id', $cartsId)->first();
    if (!$data) {
        return response()->json(['message' => 'Registro no encontrado'], 404);
    }
    $data->delete();

    return response()->json(['message' => 'Eliminado exitosamente'], 200);
}
}
