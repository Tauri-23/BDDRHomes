<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class client_property_views extends Model
{
    use HasFactory;

    public function client()
    {
        return $this->belongsTo(user_clients::class, 'client', 'id');
    }

    public function property()
    {
        return $this->belongsTo(published_properties::class, 'property', 'id');
    }
}
