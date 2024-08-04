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

  public function categories(){
    $categories = Category::All();
    return response()->json($categories,200);
  }

  public function getProductsByCategory($categoryId)
  {
    $category = Category::find($categoryId);
    if(!$category){
      return response()->json(['message' => 'Category not found'], 404);
    }
    $products = $category->products;
    return response()->json($products);
  }

}
