<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MedicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('medications')->insert([
            'medication_id' => 1,
            'medication_name' => 'Giảm đau, hạ sốt'
        ]);

        DB::table('medications')->insert([
            'medication_id' => 2,
            'medication_name' => 'Kháng sinh'
        ]);

        DB::table('medications')->insert([
            'medication_id' => 3,
            'medication_name' => 'Kháng viêm'
        ]);

        DB::table('medications')->insert([
            'medication_id' => 4,
            'medication_name' => 'Kháng histamin'
        ]);

        DB::table('medications')->insert([
            'medication_id' => 5,
            'medication_name' => 'Ho và long đờm'
        ]);

        DB::table('medications')->insert([
            'medication_id' => 6,
            'medication_name' => 'Trị tiêu chảy'
        ]);

        DB::table('medications')->insert([
            'medication_id' => 7,
            'medication_name' => 'Trị táo bón'
        ]);

        DB::table('medications')->insert([
            'medication_id' => 8,
            'medication_name' => 'Vitamin, khoáng chất'
        ]);
    }
}
