<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Unit extends Model
{
    use HasFactory, SoftDeletes;

    protected $primaryKey = "unit_id";

    /**
     * @var mixed
     */
    public $display_sign;
    /**
     * @var mixed
     */
    public $display_name;

    protected $fillable = [
        'display_name',
        'display_sign'
    ];

    protected $hidden = ['deleted_at', 'created_at', 'updated_at'];
}
