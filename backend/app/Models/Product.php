<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'status',
        'description',
        'price',
        'image_path',
        'category_id',
    ];
    
    // Relación pertenencia a una categoría
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
