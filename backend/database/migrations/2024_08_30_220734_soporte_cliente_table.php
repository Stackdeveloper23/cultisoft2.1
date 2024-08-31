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
        Schema::create('soporte', function (Blueprint $table) {
        $table->id(); 
        $table->enum('tipo_solicitud', ['queja', 'informacion', 'solicitud', 'sugerencia']); 
        $table->string('nombre');
        $table->string("identificion"); 
        $table->string('asunto', 255); 
        $table->text('descripcion'); 
        $table->text('movil'); 
        $table->text('email'); 
        $table->string('factura')->nullable();
        $table->string('categoria', 100);
        $table->foreignId('user_id')->constrained()->onDelete('cascade');   
        $table->timestamps(); 

    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        
        Schema::dropIfExists('soporte');
    }
};
