<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Unit extends Model
{
    use HasFactory, SoftDeletes;

    protected $primaryKey = "unit_id";

    protected $fillable = [
        'display_name',
        'display_sign',
        'is_small'
    ];

    protected $hidden = ['deleted_at', 'created_at', 'updated_at'];
}
