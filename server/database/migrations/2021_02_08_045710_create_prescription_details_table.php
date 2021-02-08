<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrescriptionDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prescription_details', function (Blueprint $table) {
            $table->unsignedBigInteger('pres_id');
            $table->unsignedBigInteger('med_id');

            $table->unsignedFloat('qty_morning')->default(0);
            $table->unsignedFloat('qty_noon')->default(0);
            $table->unsignedFloat('qty_afternoon')->default(0);
            $table->unsignedFloat('qty_night')->default(0);

            $table->string('note_morning');
            $table->string('note_noon');
            $table->string('note_afternoon');
            $table->string('note_night');

            $table->unsignedFloat('total_day');

            $table->unsignedDouble('unit_sell_price_default');
            $table->unsignedDouble('unit_sell_price_fixed');
            $table->unsignedDouble('pres_med_total');

            $table->boolean('is_fixed_total')->default(false);

            $table->timestamps();

            $table->unique(["pres_id", "med_id"], 'pres_med_unique');

            $table->foreign('pres_id')
                ->references('pres_id')
                ->on('prescriptions');

            $table->foreign('med_id')
                ->references('med_id')
                ->on('medicines');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prescription_details');
    }
}
