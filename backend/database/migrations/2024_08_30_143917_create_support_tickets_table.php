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
        Schema::create('support_tickets', function (Blueprint $table) {
            $table->id(); 
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); 
            $table->foreignId('compra_id')->nullable()->constrained()->onDelete('set null'); 
            $table->string('asunto', 255); 
            $table->text('descripcion'); 
            $table->enum('status', ['open', 'in_progress', 'resolved', 'closed'])->default('open'); 
            $table->enum('priority', ['low', 'medium', 'high', 'urgent'])->default('medium'); 
            $table->string('categoria', 100); 
            $table->foreignId('assigned_to')->nullable()->constrained('users')->onDelete('set null'); 
            $table->timestamp('resolved_at')->nullable(); 
            $table->timestamps(); 
       });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('support_tickets');
    }
};