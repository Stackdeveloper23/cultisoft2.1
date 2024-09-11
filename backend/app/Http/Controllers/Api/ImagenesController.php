<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CaruselImage;
use Illuminate\Http\Request;

class ImagenesController extends Controller
{
    public function index(){

        $carrusel = CaruselImage::All();
      return response()->json($carrusel,200);
      }
}
