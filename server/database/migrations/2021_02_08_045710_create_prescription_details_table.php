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

            $table->string('formulea')->nullable();

            $table->unsignedInteger('amounts');

            $table->unsignedDecimal('unit_sell_price');
            $table->unsignedDecimal('sell_price');

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
