<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PrescriptionDetail extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "pres_id",
        "med_id",
        "formulae",
        "amount",
        "unit_sell_price",
        "sell_price"
    ];
}
