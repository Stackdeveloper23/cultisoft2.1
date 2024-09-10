<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('compras', function (Blueprint $table) {
            $table->id();
            $table->string('identificacion');
            $table->string('nombre');
            $table->string('apellidos');
            $table->string('departamento')->nullable();
            $table->string('ciudad')->nullable();
            $table->string('barrio')->nullable();
            $table->string('direccion')->nullable();
            $table->string('movil');
            $table->string('movil2')->nullable();
            $table->string('referencias')->nullable();
            $table->foreignId('carts_id')->constrained()->onDelete('cascade'); 
           // $table->unique('carts_id'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
      
        Schema::dropIfExists('compras');
    }
};
