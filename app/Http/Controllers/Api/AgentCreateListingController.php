<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PropertyTypeResource;
use App\Models\property_amenities;
use App\Models\property_financing;
use App\Models\property_types;
use Illuminate\Http\Request;

class AgentCreateListingController extends Controller
{
    public function getPropertyTypes() 
    {
        return response()->json(property_types::all());
    }

    public function getPropertyAmenities()
    {
        return response()->json(property_amenities::all());
    }

    public function getPropertyFinancing()
    {
        return response()->json(property_financing::all());
    }
}
