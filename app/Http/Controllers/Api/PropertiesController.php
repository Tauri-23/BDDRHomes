<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateFilenameService;
use App\Contracts\IGenerateIdService;
use App\Http\Controllers\Controller;
use App\Models\ongoing_transactions;
use App\Models\property_amenities;
use App\Models\property_financing;
use App\Models\property_types;
use App\Models\published_properties;
use App\Models\published_properties_amenities;
use App\Models\published_properties_financing;
use App\Models\published_properties_photos;
use Illuminate\Http\Request;

class PropertiesController extends Controller
{
    protected $generateId, $generateFilename;

    public function __construct(IGenerateIdService $generateId, IGenerateFilenameService $generateFilename)
    {
        $this->generateId = $generateId;
        $this->generateFilename = $generateFilename;
    }

    // GET
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

    public function getAllPublishedProperties()
    {
        $properties = published_properties::with(['photos', 'amenities', 'financings', 'developer', 'propertyType', 'project', 'province', 'city'])->get();
        return response()->json($properties);
    }

    public function getAllPublishedPropertiesPaginated($limit, $page)
    {
        $properties = published_properties::with(['photos', 'amenities', 'financings', 'developer', 'propertyType', 'project', 'province', 'city'])
        ->paginate($limit, ['*'], 'page', $page);

        return response()->json($properties);
    }

    public function getAllPublishedPropertiesWhereProject($projId)
    {
        $properties = published_properties::with(['photos', 'amenities', 'financings', 'developer', 'propertyType', 'project', 'province', 'city'])->where('project', $projId)->get();
        return response()->json($properties);
    }

    public function getFullPropertyViaId($propId)
    {
        $property = published_properties::where('id', $propId)
            ->with(['photos', 'amenities', 'propertyType', 'financings', 'developer', 'project', 'province', 'city'])
            ->first();

        return response()->json($property);
    }

    public function isPropertyInClientOngoingTransaction($clientId, $propId)
    {
        $isExist = ongoing_transactions::where('client', $clientId)->where('property', $propId)->whereNot('status', 'cancelled')->exists();
        return response()->json($isExist);
    }

    

    // POST
    // Publishing
    public function publishPropertyPost(Request $request)
    {
        $propertyId = $this->generateId->generate(published_properties::class, 12);
        $publishedProperty = new published_properties();

        $publishedProperty->id = $propertyId;
        
        $publishedProperty->project = $request->projectId;

        $publishedProperty->project_model = $request->model;
        $publishedProperty->province_denormalized = $request->prov_den;
        $publishedProperty->city_denormalized = $request->city_den;
        $publishedProperty->province = $request->province;
        $publishedProperty->city = $request->city;
        $publishedProperty->developer = $request->projDev;

        $publishedProperty->bedroom = $request->bedroom;
        $publishedProperty->bath = $request->bath;
        $publishedProperty->carport = $request->carport;
        $publishedProperty->lot_area = $request->lot_area;
        $publishedProperty->floor_area = $request->floor_area;
        $publishedProperty->property_type = $request->property_type;
        $publishedProperty->storey = $request->storey;
        $publishedProperty->tcp = $request->tcp;

        $publishedProperty->dp_percent = $request->dp_percent;
        $publishedProperty->dp_term_months = $request->dp_term_months;
        $publishedProperty->loanable_percent = $request->loanable_percent;
        $publishedProperty->loan_interest_rate = $request->loan_interest_rate;
        $publishedProperty->loan_term_ma = $request->term_with_ma_bank;
        $publishedProperty->required_income_min = $request->req_income_min;
        $publishedProperty->required_income_max = $request->req_income_max;
        $publishedProperty->turnover = $request->turnover;

        if(!$publishedProperty->save()) 
        {
            return response()->json([
                'status' => 401,
                'message' =>'There was an error publishing your property.'
            ]);
        }

        // Add property amenities
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

        // Add property_financing
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
        $position = 1;
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
                $propertyPhoto->position = ++$position;
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
            'message' =>"$request->project_name $request->project_model added."
        ]);
    }

    public function deletePropertyPermanentlyPost(Request $request)
    {
        $propertyToDel = published_properties::where('id', $request->propId)->with('photos')->first();
        

        if($propertyToDel)
        {
            $propertyName = "$propertyToDel->project_name $propertyToDel->project_model";
            $propertyToDel->delete();

            $targetDirectory = base_path('react/src/assets/media/properties');
            foreach($propertyToDel->photos as $prop)
            {
                $filepath = "$targetDirectory/$prop->filename";
                if(file_exists($filepath))
                {
                    unlink($filepath);
                }
            }
            

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



    // Editing
    public function removePropertyPhoto(Request $request)
    {
        $photo = published_properties_photos::find($request->id);

        if($photo->delete())
        {
            $targetDirectory = base_path('react/src/assets/media/properties');
            $filepath = $targetDirectory . '/' . $request->filename;
            if(file_exists($filepath))
            {
                unlink($filepath);
            }

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

    public function addPropertyPhoto(Request $request)
    {
        $photosToReturn = [];

        //get all the property then get the position which is the highest e.g. 1,2,3,4,5 the highest is 5
        $propertyPhotosFinalPosition = published_properties_photos::where('property', $request->propertyId)->orderBy('position', 'DESC')->value('position');

        try
        {
            foreach($request->file('photo') as $photo)
            {
                $propertyPhotoId = $this->generateId->generate(published_properties_photos:: class, 6);

                $targetDirectory = base_path('react/src/assets/media/properties');

                $newFilename = $this->generateFilename->generate($photo, $targetDirectory);

                $photo->move($targetDirectory, $newFilename);

                $propertyPhoto = new published_properties_photos();
                $propertyPhoto->id = $propertyPhotoId;
                $propertyPhoto->filename = $newFilename;                
                $propertyPhoto->property = $request->propertyId;
                $propertyPhoto->position = (int) ++$propertyPhotosFinalPosition;

                $propertyPhoto->save();

                $photosToReturn[] = [
                    'id' => $propertyPhotoId,
                    'filename' => $newFilename,
                    'property' => $request->propertyId
                ];

                //$propertyPhotosFinalPosition += 1;
            }
        }
        catch(\Exception $ex)
        {
            return response()->json([
                'status' => 500,
                'message' => 'Failed to upload file: '. $ex->getMessage()
            ]);
        }


        return response()->json([
            'status' => 200,
            'photos' => $photosToReturn,
            'message' => 'Success'
        ]);
    }

    public function updatePhotosSequence(Request $request)
    {
        $position = 1;
        foreach($request->photos as $photo)
        {
            $propPhoto = published_properties_photos::find($photo);
            $propPhoto->position = $position;
            $propPhoto->save();
            $position += 1;
        }

        return response()->json([
            'status' => 200,
            'message' => 'Success'
        ]);
    }

    public function updatePropertyName(Request $request)
    {
        $property = published_properties::find($request->id);
        $property->project_name = $request->name;

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

    public function updatePropertyDesc(Request $request)
    {
        $property = published_properties::find($request->id);
        $property->description = $request->description;

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

    public function removeAmenityInProperty(Request $request) 
    {
        $amenityToRemove = published_properties_amenities::find($request->id)->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Success'
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

    public function removeFinancingInProperty(Request $request)
    {
        $financingToRemove = published_properties_financing::find($request->id)->delete();

        return response()->json([
            'status' => 200,
            'message' => 'success'
        ]);
    }
}
