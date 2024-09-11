<?php

use App\Http\Controllers\Api\Admin\AdminCategoryController;
use App\Http\Controllers\Api\Admin\AdminProductController;
use App\Http\Controllers\Api\Admin\CarruselController;
use App\Http\Controllers\Api\Admin\CompraController;
use App\Http\Controllers\Api\Admin\SoporteController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ImagenesController;
use App\Http\Controllers\Api\ResetPasswordController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\MercadoPagoController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
  //public

  
  Route::post('/auth/register', [AuthController::class, 'register']);
  Route::post('/auth/login', [AuthController::class, 'login'])->name('login');
  Route::get('/shop', [HomeController::class, 'index']);
  Route::get('/product', [ProductController::class, 'index']);
  Route::get('/product/{slug}', [ProductController::class, 'show']);
  Route::get('/category', [CategoryController::class, 'index']);
  Route::get('/categories', [CategoryController::class, 'categories']);
  Route::get('/category/{id}', [CategoryController::class, 'show']);
  Route::get('/category/{categoryId}/products', [CategoryController::class, 'getProductsByCategory']);
  Route::get('/search', [SearchController::class, 'search']);
  Route::post('/chatbot', [ChatbotController::class, 'handleRequest']);
  Route::post('/reset-password', [ResetPasswordController::class, 'reset']);
  
  Route::get('/imagenes-carrusel', [ImagenesController::class, 'index']); 

  //private
  Route::group(['middleware' => 'auth:sanctum'], function () {

    //logout
    Route::post('/auth/logout', [AuthController::class, 'logout']);
   // Route::get('/shop', [CustomerController::class]);


    //shopping Card
    
    Route::post('/soporte/create', [SoporteController::class, "create"]);
    Route::get('/cart', [CartController::class, 'show']);
    Route::post('/cart/add/{productId}', [CartController::class, 'add']);
    Route::delete('/cart/remove/{itemId}', [CartController::class, 'remove']);
    Route::post('/cart/clear', [CartController::class, 'clear']);
    Route::patch('/cart/items/{itemId}', [CartController::class, 'updateQuantity']);
    Route::post('/create-payment-preference', [MercadoPagoController::class, 'createPaymentPreference']);
    Route::post('/compra', [CompraController::class, "create"]);
    Route::post('/compra/finca', [CompraController::class, "createFinca"]);
    Route::put('/compra/actualizar/{id}', [CompraController::class, 'update']);
    Route::delete('/compra/eliminar/{id}',[CompraController::class, "destroy"]);
    Route::get('/compra/usuario/{id}', [CompraController::class, "show"]);

    Route::get('/mercadopago/success', function () {
      return 'Pago realizado con éxito';
    })->name('mercadopago.success');

    // Ruta de fallo para MercadoPago
    Route::get('/mercadopago/failed', function () {
      return 'Pago fallido';
    })->name('mercadopago.failed');

    //Admin
    Route::group(['middleware' => ['auth:sanctum','role:admin']], function () {

      Route::get('/admin/categories', [AdminCategoryController::class, 'index']);
      Route::get('/admin/category/{id}', [AdminCategoryController::class, 'show']);
      Route::post('/admin/category/create', [AdminCategoryController::class, 'create']);
      Route::put('/admin/category/edit/{id}', [AdminCategoryController::class, 'update']);  
      Route::delete('/admin/category/delete/{id}', [AdminCategoryController::class, 'destroy']);  

      
      Route::get('/admin/user', [UserController::class, 'index']);
      Route::get('/admin/user/count', [UserController::class, 'UsersCount']);
      Route::get('/admin/user/{id}', [UserController::class, 'show']);
      Route::post('/admin/user/createUser', [UserController::class, 'create']);
      Route::put('/admin/user/edit/{id}', [UserController::class, 'update']);  
      Route::delete('/admin/user/delete/{id}', [UserController::class, 'destroy']); 

      Route::post('/admin/product/create', [AdminProductController::class, 'create']);
      Route::get('/admin/products/count', [AdminProductController::class, 'ProductCount']);
      Route::get('/admin/product', [AdminProductController::class, 'index']);
      Route::get('/admin/product/{id}', [AdminProductController::class, 'show']);
      Route::put('/admin/product/edit/{id}', [AdminProductController::class, 'update']);  
      Route::delete('/admin/product/delete/{id}', [AdminProductController::class, 'destroy']); 

      Route::get('/admin/compras', [CompraController::class, 'index']);
      Route::get('/admin/compras/count', [CompraController::class, 'ComprasCount']);
      Route::post('/admin/compra/create', [CompraController::class, "create"]);
      Route::put('/admin/compra/actualizar/{id}', [CompraController::class, 'update']);
      Route::delete('/admin/compra/eliminar/{id}',[CompraController::class, "delete"]);
      Route::get('/admin/compra/usuario/{id}', [CompraController::class, "show"]);

      Route::get('/admin/soporte', [SoporteController::class, 'index']);
      Route::post('/admin/soporte/create', [SoporteController::class, "create"]);
      Route::put('/admin/soporte/actualizar/{id}', [SoporteController::class, 'update']);
      Route::delete('/admin/soporte/eliminar/{id}',[SoporteController::class, "delete"]);
      Route::get('/admin/soporte/usuario/{id}', [SoporteController::class, "show"]);

      Route::get('/admin/carrusel-images', function () {
        return App\Models\CaruselImage::all();
    });
    Route::put('/carrusel/update/{id}', [CarruselController::class, 'update']); 
    Route::get('/carrusel/show/{id}', [CarruselController::class, 'show']); 
//Route::post('/carrusel/create', [CarruselController::class, 'create']);
    });
  });
});
