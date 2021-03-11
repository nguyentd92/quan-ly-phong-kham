<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Medicine extends Model
{
    use HasFactory, SoftDeletes;

    protected $primaryKey = "med_id";

    protected $fillable = [
        'med_name',
        'unit_sell_price',
        'unit_vol',
        'med_unit_id',
        'images',
        'medication_id',
    ];
}
