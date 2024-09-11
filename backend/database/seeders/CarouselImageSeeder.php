<?php

namespace Database\Seeders;

use App\Models\CaruselImage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CarouselImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CaruselImage::insert([
            ['image_url' => 'https://png.pngtree.com/png-clipart/20230821/original/pngtree-vector-illustration-eps10-of-a-spring-flower-sale-background-poster-template-png-image_10596358.png', 'created_at' => now(), 'updated_at' => now()],
            ['image_url' => 'https://th.bing.com/th/id/R.3991f808a5614a184129623cda8266fa?rik=rQgc6Fc17T%2famg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-hgazJmiu-Ng%2fUFmVHky-MiI%2fAAAAAAAAnSQ%2f9r7Q5mpO1b4%2fs1600%2f10-Imagenes-de-Flores-Full-HD_Fotos-de-Flores-Fotoblogx_08.jpg&ehk=gnuCBizXDaDGIDzxVkkY9xumQlWtcqbAK7eqFnf5RtU%3d&risl=&pid=ImgRaw&r=0', 'created_at' => now(), 'updated_at' => now()],
            ['image_url' => 'https://th.bing.com/th/id/OIP.pTHE6HyipohhbQtbehlSPgHaE6?rs=1&pid=ImgDetMain', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
