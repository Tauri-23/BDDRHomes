<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateIdService;
use App\Http\Controllers\Controller;
use App\Models\property_listings;
use Illuminate\Http\Request;

class PropertyListingsController extends Controller
{
    protected $generateId;

    public function __construct(IGenerateIdService $generateId)
    {
        $this->generateId = $generateId;
    }


    // GET
    public function getPropertiesAgent($agentId)
    {
        $properties = property_listings::where('agent', $agentId)
            ->with(['property', 'agent'])
            ->get();
        return response()->json($properties);
    }

    public function getAllProperties()
    {
        $properties = property_listings::
        with(['property', 'agent'])->
        get();

        return response()->json($properties);
    }

    public function getFullPropertyViaPropId($propId)
    {
        $property = property_listings::where('id', $propId)
            ->with(['property', 'agent'])->first();

        return response()->json($property);
    }



    // POST
    public function PublishPropertyListingPost(Request $request)
    {
        $propertyListingId = $this->generateId->generate(property_listings::class, 12);
        $propertyListing = new property_listings();
        $propertyListing->id = $propertyListingId;
        $propertyListing->property = $request->property;
        $propertyListing->agent = $request->agent_id;

        if($propertyListing->save())
        {
            return response()->json([
                'status' => 200,
                'message' => ' Property added to listing.'
            ]);
        }
        else
        {
            return response()->json([
                'status' => 401,
                'Message' => 'Something went wrong please try again later.'
            ]);
        }
    }
}
