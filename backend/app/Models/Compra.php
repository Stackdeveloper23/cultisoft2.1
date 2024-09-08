<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compra extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'apellidos',
        'departamento',
        'ciudad',
        'barrio',
        'direccion',
        'movil',
        'movil2',
        'referencias',
        'carts_id'
    ];

    public function carrito()
    {
        return $this->belongsTo(Cart::class);
    }
}
