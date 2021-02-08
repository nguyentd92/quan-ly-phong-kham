<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SymptomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('symptoms')->insert([
            'symptom_id' => 1,
            'symptom_name' => 'Ho'
        ]);

        DB::table('symptoms')->insert([
            'symptom_id' => 2,
            'symptom_name' => 'Sốt'
        ]);

        DB::table('symptoms')->insert([
            'symptom_id' => 3,
            'symptom_name' => 'Tiêu chảy'
        ]);

        DB::table('symptoms')->insert([
            'symptom_id' => 4,
            'symptom_name' => 'Nôn ói'
        ]);
    }
}
