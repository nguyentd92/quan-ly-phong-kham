<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->insert([
            "key" => "CENTER_NAME",
            "value" => "CODEGYM JSC HUE BRANCH"
        ]);

        DB::table('settings')->insert([
            "key" => "CENTER_ADDRESS",
            "value" => "28 Nguyễn Tri Phương, TP Huế"
        ]);

        DB::table('settings')->insert([
            "key" => "CENTER_TEL",
            "value" => "0935.418.749"
        ]);
    }
}
