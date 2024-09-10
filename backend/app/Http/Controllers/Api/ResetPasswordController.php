<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ResetPasswordController extends Controller
{
    public function reset(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|confirmed|min:8',
        ]);

        $user = \App\Models\User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json(['message' => 'El correo no está registrado.'], 400);
        }

        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json(['message' => 'Contraseña restablecida con éxito.']);
    }
}
