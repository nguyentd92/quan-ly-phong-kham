<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MedicineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('medicines')->insert([
            'med_id' => 1,
            'med_name' => 'Amoxcillin',
            'unit_sell_price' => 1500,
            'med_in_stocks' => 100,
            'unit_vol' => '1 gam',
            'med_unit_id' => 1,
            'medication_id' => 2
        ]);

        DB::table('medicines')->insert([
            'med_id' => 2,
            'med_name' => 'Cephalexin',
            'unit_sell_price' => 2000,
            'med_in_stocks' => 80,
            'unit_vol' => '1 gam',
            'med_unit_id' => 1,
            'medication_id' => 2
        ]);

        DB::table('medicines')->insert([
            'med_id' => 3,
            'med_name' => 'Aspirin',
            'unit_sell_price' => 1800,
            'med_in_stocks' => 90,
            'unit_vol' => '1 gam',
            'med_unit_id' => 1,
            'medication_id' => 3
        ]);

        DB::table('medicines')->insert([
            'med_id' => 4,
            'med_name' => 'Paracetamol',
            'unit_sell_price' => 2000,
            'med_in_stocks' => 150,
            'unit_vol' => '500mg',
            'med_unit_id' => 1,
            'medication_id' => 1
        ]);
    }
}
