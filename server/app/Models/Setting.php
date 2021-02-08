<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Setting extends Model
{
    use HasFactory, SoftDeletes;

    public $key;
    public $value;
    public $setting_name;

    protected $fillable = ['key', 'value', 'setting_name'];

    protected $hidden = ['deleted_at'];
}
