<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\published_properties;
use Illuminate\Http\Request;

class ClientListingController extends Controller
{
    public function getAllProperties()
    {
        $properties = published_properties::
        with(['photos', 'amenities', 'propertyType', 'financings', 'agent'])->
        get();

        return response()->json([
            'data' => $properties
        ]);
    }
}
