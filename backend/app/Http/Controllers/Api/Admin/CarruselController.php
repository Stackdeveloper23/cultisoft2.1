<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\CaruselImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CarruselController extends Controller
{
    /*public function create(Request $request)
    { 
        $validatedData = $request->validate([
          'image_url' => 'required|string',
        ]);
Log::info('datos enviado', $validatedData);
        DB::beginTransaction();

        try {
            $imagen = CaruselImage::create($validatedData);
          
            DB::commit();
    
            return response()->json($imagen, 200);
        } catch (\Exception $e) {
            DB::rollBack();
    
            Log::error('Error al crear el registro: ' . $e->getMessage(), [
                'exception' => $e,
                'request_data' => $request->all()
            ]);
    
            return response()->json(['error' => 'Failed to create sow'], 500);
        }
      }*/
     


      public function show($id)
{
    $Carusel = CaruselImage::find($id);

    if (!$Carusel) {
        return response()->json(['message' => 'imagen no encontrada'], 404);
    } return response()->json($Carusel, 200);
}

      public function update(Request $request, $id)
      {
          $validatedData = $request->validate([
              'image_url' => 'required|string',
          ]);
  
          Log::info('Datos enviados para actualizar:', $validatedData);
  
          try {
              // Buscar la imagen por ID y actualizarla
              $imagen = CaruselImage::findOrFail($id);
              $imagen->update($validatedData);
  
              return response()->json($imagen, 200);
          } catch (\Exception $e) {
              Log::error('Error al actualizar el registro: ' . $e->getMessage(), [
                  'exception' => $e,
                  'request_data' => $request->all()
              ]);
  
              return response()->json(['error' => 'Failed to update image.'], 500);
          }
      }
}
