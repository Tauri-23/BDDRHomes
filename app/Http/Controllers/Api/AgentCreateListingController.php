<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateFilenameService;
use App\Contracts\IGenerateIdService;
use App\Http\Controllers\Controller;
use App\Http\Resources\PropertyTypeResource;
use App\Models\property_amenities;
use App\Models\property_financing;
use App\Models\property_types;
use App\Models\published_properties;
use App\Models\published_properties_amenities;
use App\Models\published_properties_financing;
use App\Models\published_properties_photos;
use Illuminate\Http\Request;

class AgentCreateListingController extends Controller
{
    protected $generateId;
    protected $generateFilename;
    public function __construct(IGenerateIdService $generateId, IGenerateFilenameService $generateFilename)
    {
        $this->generateId = $generateId;
        $this->generateFilename = $generateFilename;
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
        $publishedProperty->agent = $request->agent_id;
        $publishedProperty->required_income = $request->required_income;

        if(!$publishedProperty->save()) 
        {
            return response()->json([
                'status' => 401,
                'message' =>'There was an error publishing your property.'
            ]);
        }

        
        foreach($request->property_amenities as $amenity) 
        {
            $amenities = new published_properties_amenities();
            $amenities->id = $this->generateId->generate(published_properties_amenities::class, 6);
            $amenities->amenity = $amenity;
            $amenities->property = $propertyId;

            if(!$amenities->save()) 
            {
                return response()->json([
                    'status' => 401,
                    'message' =>'There was an error publishing your property.'
                ]);
            }
        }


        foreach($request->property_financing as $financing) 
        {
            $financings = new published_properties_financing();
            $financings->id = $this->generateId->generate(property_financing::class, 6);
            $financings->financing = $financing;
            $financings->property = $propertyId;

            if(!$financings->save())
            {
                return response()->json([
                    'status' => 401,
                    'message' =>'There was an error publishing your property.'
                ]);
            }
        }


        // Upload photos to storage and database
        foreach($request->file('photo') as $photo) 
        {
            try 
            {
                $targetDirectory = base_path('react/src/assets/media/properties');
    
                $newFilename = $this->generateFilename->generate($photo, $targetDirectory);
    
                //upload the file to the public directory
                $photo->move($targetDirectory, $newFilename);

                $propertyPhoto = new published_properties_photos();
                $propertyPhoto->id = $this->generateId->generate(published_properties_photos::class, 6);
                $propertyPhoto->filename = $newFilename;
                $propertyPhoto->property = $propertyId;

                $propertyPhoto->save();  
                
    
            } 
            catch(\Exception $ex) 
            {
                return response()->json([
                    'status' => 500,
                    'message' =>'Failed to upload file: ' . $ex->getMessage()
                ]);
            }
        }
        
        

        return response()->json([
            'status' => 200,
            'message' =>'Success'
        ]);
    }
}
