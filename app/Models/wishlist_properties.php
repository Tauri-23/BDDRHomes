<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class wishlist_properties extends Model
{
    use HasFactory;

    public function wishlist()
    {
        return $this->belongsTo(wishlist::class, 'wishlist', 'id');
    }

    public function property_listing()
    {
        return $this->belongsTo(property_listings::class, 'property', 'id')->with(['property', 'agent']);
    }
}
