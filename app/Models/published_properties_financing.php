<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class published_properties_financing extends Model
{
    use HasFactory;

    public function financing()
    {
        return $this->belongsTo(property_financing::class, 'financing', 'id');
    }
}
