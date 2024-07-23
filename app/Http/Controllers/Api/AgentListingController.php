<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\published_properties;
use App\Models\published_properties_amenities;
use Illuminate\Http\Request;

class AgentListingController extends Controller
{
    public function getPropertiesAgent($agentId)
    {
        $properties = published_properties::where('agent', $agentId)
            ->with('photos')
            ->get();
        return response()->json([
            'data' => $properties
        ]);
    }

    public function getFullPropertyViaPropId($propId)
    {
        $property = published_properties::find($propId)
            ->with(['photos', 'amenities', 'propertyType', 'financings'])
            ->get();

        return response()->json([
            'data' => $property
        ]);
    }

    public function removeAmenityInProperty(Request $request) {
        $amenityToRemove = published_properties_amenities::find($request->id)->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Success'
        ]);
    }
}
