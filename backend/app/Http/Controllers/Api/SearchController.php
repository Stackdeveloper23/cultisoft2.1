<?php

namespace App\Http\Controllers\Api;
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->query('query');
        $products = Product::where('name', 'like', "%{$query}%")->get(['id', 'name']);
         $categories = Category::where('name', 'like', "%{$query}%")->get(['id', 'name']);

        return response()->json([
            'products' => $products,
            'categories' => $categories
        ]); 
    }
    
}