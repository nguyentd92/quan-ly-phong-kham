<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('units')->insert([
            'unit_id' => 1,
            'display_sign' => 'v',
            'display_name' => 'viên'
        ]);

        DB::table('units')->insert([
            'unit_id' => 2,
            'display_sign' => 'gói',
            'display_name' => 'gói'
        ]);

        DB::table('units')->insert([
            'unit_id' => 3,
            'display_sign' => 'ml',
            'display_name' => 'mililit'
        ]);

        DB::table('units')->insert([
            'unit_id' => 4,
            'display_sign' => 'ống',
            'display_name' => 'ống'
        ]);
    }
}
