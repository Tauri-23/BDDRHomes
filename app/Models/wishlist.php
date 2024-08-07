<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class wishlist extends Model
{
    use HasFactory;

    public function wishlistProperties()
    {
        return $this->hasMany(wishlist_properties::class, 'wishlist', 'id')->with('property');
    }
}
