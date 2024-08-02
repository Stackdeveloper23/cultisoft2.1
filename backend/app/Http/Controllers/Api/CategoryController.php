<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function index(){

        $categories = Category::paginate(5);
        return response()->json($categories, 200);
    }

  public function show($id){
    $data = Category::find($id);
    return response()->json($data, 200);
  }

}
