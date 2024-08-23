<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class property_listings extends Model
{
    use HasFactory;

    public function property()
    {
        return $this->belongsTo(published_properties::class, 'property', 'id')->with(['photos', 'amenities', 'propertyType', 'financings']);
    }

    public function agent()
    {
        return $this->belongsTo(user_agents::class, 'agent', 'id');
    }
}
