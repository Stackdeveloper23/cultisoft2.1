<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soporte extends Model
{
    use HasFactory;

    protected $fillable = [
        'tipo_solicitud',
        'nombre',
        'identificacion',
        'asunto',
        'descripcion',
        'movil',
        'email',
        'factura',
        'categoria',
        'user_id',
    ];
}
