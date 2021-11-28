<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['description'=>'Buy Milk', 'status'=> 2],
            ['description'=>'Order Phone', 'status'=> 1],
            ['description'=>'Call Mom', 'status'=> 0],
            //...
        ];
        \App\Models\Todo::insert($data);
    }
}
