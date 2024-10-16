<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class published_properties extends Model
{
    use HasFactory;

    public function photos()
    {
        return $this->hasMany(published_properties_photos::class, 'property', 'id')->orderBy('position',  'ASC');
    }

    public function amenities()
    {
        return $this->hasMany(published_properties_amenities::class, 'property', 'id')->with('amenity');
    }

    public function propertyType()
    {
        return $this->belongsTo(property_types::class, 'property_type', 'id');
    }

    public function financings()
    {
        return $this->hasMany(published_properties_financing::class, 'property', 'id')->with('financing');
    }

    public function developer()
    {
        return $this->belongsTo(property_developers::class, 'developer', 'id');
    }

    public function project()
    {
        return $this->belongsTo(property_developers_projects::class, "project", "id");
    }

    public function province()
    {
        return $this->belongsTo(provinces::class, 'province', 'id');
    }

    public function city()
    {
        return $this->belongsTo(cities::class, 'city', 'id');
    }

    
}
