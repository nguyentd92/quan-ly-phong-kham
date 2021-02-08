<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicines', function (Blueprint $table) {
            $table->id('med_id');
            $table->string('med_name');

            $table->double('unit_sell_price');
            $table->unsignedInteger('med_in_stocks')->default(0);

            $table->string('unit_vol');
            $table->unsignedBigInteger('med_unit_id');
            $table->text('images')->nullable();

            $table->unsignedBigInteger('medication_id')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('medication_id')
                ->references('medication_id')
                ->on('medications');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('medicines', function (Blueprint $table) {
            $table->dropForeign('medicines_medication_id_foreign');
        });

        Schema::dropIfExists('medicines');
    }
}
