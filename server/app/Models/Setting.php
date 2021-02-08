<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Setting extends Model
{
    use HasFactory, SoftDeletes;

    protected $primaryKey = 'key';
    public $incrementing = false;

    protected $fillable = ['key', 'value', 'setting_name'];

    protected $hidden = ['deleted_at'];
}
