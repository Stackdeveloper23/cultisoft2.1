<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function index(){

        $users = User::All();
      return response()->json($users,200);
      }

      public function show($id)
{
    $user = User::find($id);

    if (!$user) {
        return response()->json(['message' => 'usuario no encontrado'], 404);
    }

    return response()->json($user, 200);
}

      public function create(Request $request)
    { 
        $validatedData = $request->validate([
          'name' => 'required|string',
          'email' => 'required|string|email|max:255|unique:users',
          'password' => 'required|string|min:8|confirmed',
        ]);

        DB::beginTransaction();

        try {
            $user = User::create($validatedData);
          
            // Confirmar la transacción
            DB::commit();
    
            return response()->json($user, 200);
        } catch (\Exception $e) {
            // Revertir la transacción en caso de error
            DB::rollBack();
    
            // Registrar el error en los logs
            Log::error('Error al crear el registro: ' . $e->getMessage(), [
                'exception' => $e,
                'request_data' => $request->all()
            ]);
    
            return response()->json(['error' => 'Failed to create user'], 500);
        }
      }

      public function update(Request $request, $id)
{
  $data = User::find($id);
  $data->fill($request->all());
  $data->save();
  return response()->json($data, 200);
}

public function destroy($id){
    $data = User::find($id);
    $data->delete();
    return response()->json('Delete', 200);
  }
}
