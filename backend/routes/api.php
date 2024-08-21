<?php

use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\MercadoPagoController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function(){
//public
   Route::get('/shop',[HomeController::class, 'index']);
   Route::get('/product',[ProductController::class, 'index']);
   Route::get('/product/{slug}', [ProductController::class, 'show']);
   Route::post('/auth/register', [AuthController::class, 'register']);
   Route::post('/auth/login',[AuthController::class, 'login'])->name('login');
   Route::get('/category', [CategoryController::class, 'index']);
   Route::get('/categories',[CategoryController::class, 'categories']);
   Route::get('/category/{id}',[CategoryController::class, 'show']);
   Route::get('/category/{categoryId}/products',[CategoryController::class,'getProductsByCategory']);
    // barra de busqueda
    Route::get('/search', [SearchController::class, 'search']);

   //private
   Route::group(['middleware' => 'auth:sanctum'], function (){

   //logout
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    
    Route::get('/shop',[CustomerController::class]);


//shopping Card

Route::get('/cart', [CartController::class, 'show']);
Route::post('/cart/add/{productId}', [CartController::class, 'add']);
Route::delete('/cart/remove/{itemId}', [CartController::class, 'remove']);
Route::post('/cart/clear', [CartController::class, 'clear']);
Route::patch('/cart/items/{itemId}', [CartController::class, 'updateQuantity']);
Route::post('/create-payment-preference', [MercadoPagoController::class, 'createPaymentPreference']);
Route::get('/mercadopago/success', function () {
  return 'Pago realizado con éxito';
})->name('mercadopago.success');

// Ruta de fallo para MercadoPago
Route::get('/mercadopago/failed', function () {
  return 'Pago fallido';
})->name('mercadopago.failed');

//Admin
    Route::middleware(['auth', 'admin'])->group(function () {
        Route::get('/admin', 'AdminController@index')->name('admin.index');
    
        Route::resource('/admin/products', ProductController::class);
        Route::resource('/admin/categories', CategoryController::class);
        //Route::apiResource('/admin/orders', [OrderController::class]);
        Route::get('/admin/users', [UserController::class, 'show']);
        Route::resource('/admin/user', UserController::class);
    });
  });
});