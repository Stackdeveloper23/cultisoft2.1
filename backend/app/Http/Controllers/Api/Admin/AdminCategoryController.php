<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AdminCategoryController extends Controller
{
    public function index(){

        $categories = Category::All();
      return response()->json($categories,200);
      }

      public function show($id)
{
    $category = Category::find($id);

    if (!$category) {
        return response()->json(['message' => 'Categoría no encontrada'], 404);
    }

    return response()->json($category, 200);
}

      public function create(Request $request)
    { 
        $validatedData = $request->validate([
          'name' => 'required|string',
          'description' => 'required|string'
        ]);

        DB::beginTransaction();

        try {
            // Crear el registro en la tabla 'sows'
            $category = Category::create($validatedData);
          
            // Confirmar la transacción
            DB::commit();
    
            return response()->json($category, 200);
        } catch (\Exception $e) {
            // Revertir la transacción en caso de error
            DB::rollBack();
    
            // Registrar el error en los logs
            Log::error('Error al crear el registro: ' . $e->getMessage(), [
                'exception' => $e,
                'request_data' => $request->all()
            ]);
    
            return response()->json(['error' => 'Failed to create sow'], 500);
        }
      }

      public function update(Request $request, $id)
{
  $data = Category::find($id);
  $data->fill($request->all());
  $data->save();
  return response()->json($data, 200);
}

public function destroy($id){
    $data = Category::find($id);
    $data->delete();
    return response()->json('Delete', 200);
  }
  
}