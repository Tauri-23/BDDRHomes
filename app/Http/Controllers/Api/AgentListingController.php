<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\published_properties;
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
}
