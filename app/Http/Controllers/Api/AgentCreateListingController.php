<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateIdService;
use App\Http\Controllers\Controller;
use App\Http\Resources\PropertyTypeResource;
use App\Models\property_amenities;
use App\Models\property_financing;
use App\Models\property_types;
use App\Models\published_properties;
use App\Models\published_properties_amenities;
use Illuminate\Http\Request;

class AgentCreateListingController extends Controller
{
    protected $generateId;
    public function __construct(IGenerateIdService $generateId)
    {
        $this->generateId = $generateId;
    }

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

    public function publishPropertyPost(Request $request)
    {
        $propertyId = $this->generateId->generate(published_properties::class, 12);
        $publishedProperty = new published_properties();
        $publishedProperty->id = $propertyId;
        $publishedProperty->name = $request->property_name;
        $publishedProperty->address = $request->property_address;
        $publishedProperty->description = $request->property_desc;
        $publishedProperty->bedroom = $request->bedroom;
        $publishedProperty->bath = $request->bathroom;
        $publishedProperty->carport = $request->carport;
        $publishedProperty->lot_area = $request->lot_area;
        $publishedProperty->floor_area = $request->floor_area;
        $publishedProperty->property_type = $request->property_type;
        $publishedProperty->required_income = $request->required_income;

        if(!$publishedProperty->save()) {
            return response()->json([
                'status' => 401,
                'message' =>'There was an error publishing your property.'
            ]);
        }

        // $amenities = new published_properties_amenities();
        // $amenities->id = $this->generateId->generate(published_properties_amenities::class, 6);
        // $amenities->

        return response()->json([
            'status' => 200,
            'message' =>'Success'
        ]);
    }
}
