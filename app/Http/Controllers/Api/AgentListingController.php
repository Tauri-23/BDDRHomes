<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateFilenameService;
use App\Contracts\IGenerateIdService;
use App\Http\Controllers\Controller;
use App\Models\property_amenities;
use App\Models\property_financing;
use App\Models\published_properties;
use App\Models\published_properties_amenities;
use App\Models\published_properties_financing;
use App\Models\published_properties_photos;
use Illuminate\Http\Request;

class AgentListingController extends Controller
{
    protected $generateId;
    protected $generateFilename;

    public function __construct(IGenerateIdService $generateId, IGenerateFilenameService $generateFilename)
    {
        $this->generateId = $generateId;
        $this->generateFilename = $generateFilename;
    }

    public function getPropertiesAgent($agentId)
    {
        $properties = published_properties::where('agent', $agentId)
            ->with('photos')
            ->get();
        return response()->json($properties);
    }

    public function getFullPropertyViaPropId($propId)
    {
        $property = published_properties::where('id', $propId)
            ->with(['photos', 'amenities', 'propertyType', 'financings', 'agent'])
            ->get();

        return response()->json([
            'data' => $property
        ]);
    }

    /*
    | This will delete the property from the database permanently 
    */
    public function deleteProperty(Request $request)
    {
        $propertyToDel = published_properties::find($request->propId);
        

        if($propertyToDel)
        {
            $propertyName = $propertyToDel->name;
            $propertyToDel->delete();

            return response()->json([
                'status' => 200,
                'message' => "{$propertyName} removed."
            ]);
        }
        else
        {
            return response()->json([
                'status' => 401,
                'message' => "Property doesn't exist."
            ]);
        }
    }
}
