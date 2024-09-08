<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Soporte;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SoporteController extends Controller
{
    public function index(){

        $soporte = Soporte::All();
      return response()->json($soporte,200);
      }

      public function show($id)
{
    $soporte = Soporte::find($id);

    if (!$soporte) {
        return response()->json(['message' => 'soporte no encontrada'], 404);
    }

    return response()->json($soporte, 200);
}
public function create(Request $request)
{


    $validatedData = $request->validate([
        'tipo_solicitud' => 'required|string',
        'nombre' => 'required|string',
        'identificacion' => 'required|string',
        'asunto' => 'required|string',
        'descripcion' => 'required|string',
        'movil' => 'required|string',
        'email' => 'required|string',
        'factura' => 'required|string',
    ]);



    DB::beginTransaction();

    $user = Auth::id();
    
    try {
        // Crear el nuevo registro en la base de datos, asignando el carts_id al ID del carrito del usuario
        $newRecord = Soporte::create([
            'tipo_solicitud' => $validatedData['tipo_solicitud'],
            'nombre' => $validatedData['nombre'],
            'identificacion' => $validatedData['identificacion'],
            'asunto' => $validatedData['asunto'],
            'descripcion' => $validatedData['descripcion'],
            'movil' => $validatedData['movil'],
            'email' => $validatedData['email'],
            'factura' => $validatedData['factura'],
            'user_id' => $user, 
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
  $data = Soporte::find($id);
  $data->fill($request->all());
  $data->save();
  return response()->json($data, 200);
}

public function destroy($cartsId)
{
    $data = Soporte::where('carts_id', $cartsId)->first();
    if (!$data) {
        return response()->json(['message' => 'Registro no encontrado'], 404);
    }
    $data->delete();

    return response()->json(['message' => 'Eliminado exitosamente'], 200);
}

public function delete($id){
    $data = Soporte::find($id);
    $data->delete();
    return response()->json('Delete', 200);
  }
}
