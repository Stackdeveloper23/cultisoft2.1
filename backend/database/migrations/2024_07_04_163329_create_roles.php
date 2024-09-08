<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
     
       
       $role1 = Role::create(['name' => 'admin']);
       $role2= Role::create(['name' => 'customer']);

       
       Permission::create(['name' => 'admin.user.module'])->assignRole($role1);
       Permission::create(['name' => 'admin.category.module'])->assignRole($role1);
       Permission::create(['name' => 'admin.product.module'])->assignRole($role1);
       Permission::create(['name' => 'admin.ventas.module'])->assignRole($role1);

       
       Permission::create(['name' => 'landing.page'])->syncRoles([$role1,$role2]);




      
       $user = User::find(1);
       $user->assignRole('admin');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
       
    }
};
