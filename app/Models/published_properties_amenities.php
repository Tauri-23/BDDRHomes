<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class published_properties_amenities extends Model
{
    use HasFactory;

    public function amenity()
    {
        return $this->belongsTo(property_amenities::class, 'amenity', 'id');
    }
}
