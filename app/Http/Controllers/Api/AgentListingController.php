<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateIdService;
use App\Http\Controllers\Controller;
use App\Models\property_amenities;
use App\Models\property_financing;
use App\Models\published_properties;
use App\Models\published_properties_amenities;
use App\Models\published_properties_financing;
use Illuminate\Http\Request;

class AgentListingController extends Controller
{
    protected $generateId;

    public function __construct(IGenerateIdService $generateId)
    {
        $this->generateId = $generateId;
    }

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

    public function removeAmenityInProperty(Request $request) 
    {
        $amenityToRemove = published_properties_amenities::find($request->id)->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Success'
        ]);
    }

    public function addAmenityInProperty(Request $request)
    {
        $amenityId = $this->generateId->generate(published_properties_amenities::class, 6);
        $amenityToAdd = property_amenities::find($request->amenityId);

        $amenity = new published_properties_amenities();
        $amenity->id = $amenityId;
        $amenity->property = $request->propertyId;
        $amenity->amenity = $request->amenityId;

        if($amenity->save())
        {
            return response()->json([
                'status' => 200,
                'message' => 'Success',
                'amenity' => [
                    'id'=> $amenityId,
                    'property' => $request->propertyId,
                    'amenity' => [
                        'id' => $amenityToAdd->id,
                        'icon' => $amenityToAdd->icon,
                        'amenity_name' => $amenityToAdd->amenity_name
                    ]
                ]
            ]);
        }
        else{
            return response()->json([
                'status' => 401,
                'message' => 'Something went wrong please try again later.'
            ]);
        }
    }

    public function updatePropertyTypeInProperty(Request $request)
    {
        $property = published_properties::find($request->propertyId);
        $property->property_type = $request->propertyType;

        if($property->save())
        {
            return response()->json([
                'status' => 200,
                'message' => 'Success'
            ]);
        }
        else
        {
            return response()->json([
                'status' => 401,
                'message' => 'Something went wrong please try again later.'
            ]);
        }
    }

    public function removeFinancingInProperty(Request $request)
    {
        $financingToRemove = published_properties_financing::find($request->id)->delete();

        return response()->json([
            'status' => 200,
            'message' => 'success'
        ]);
    }

    public function addFinancingInProperty(Request $request)
    {
        $financingId = $this->generateId->generate(published_properties_financing::class, 6);
        $financingToAdd = property_financing::find($request->financingId);

        $financing = new published_properties_financing();
        $financing->id = $financingId;
        $financing->property = $request->propertyId;
        $financing->financing = $request->financingId;

        if($financing->save())
        {
            return response()->json([
                'status' => 200,
                'message' => 'Success',
                'financing' => [
                    'id' => $financingId,
                    'property' => $request->propertyId,
                    'financing' => [
                        'id' => $financingToAdd->id,
                        'icon' => $financingToAdd->icon,
                        'financing_type' => $financingToAdd->financing_type
                    ]
                ]
            ]);
        }
        else
        {
            return response()->json([
                'status' => 401,
                'message' => 'Something went wrong please try again later.'
            ]);
        }
    }

    public function updatePropertyFloorplan(Request $request)
    {
        $property = published_properties::find($request->id);
        $property->bedroom = $request->bedroom;
        $property->bath = $request->bath;
        $property->carport = $request->carport;
        $property->lot_area = $request->lotArea;
        $property->floor_area = $request->floorArea;

        if($property->save())
        {
            return response()->json([
                'status' => 200,
                'message' => 'Success'
            ]);
        }
        else
        {
            return response()->json([
                'status' => 200,
                'message' => 'Something went wrong please try again later.'
            ]);
        }

    }
}
