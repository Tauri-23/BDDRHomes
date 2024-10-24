<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateIdService;
use App\Http\Controllers\Controller;
use App\Models\wishlist;
use App\Models\wishlist_properties;
use Exception;
use Illuminate\Http\Request;

class ClientWishlistController extends Controller
{
    protected $generateId;

    public function __construct(IGenerateIdService $generateId)
    {
        $this->generateId = $generateId;
    }



    // GET
    public function getAllClientWishlist($clientId)
    {
        return response()->json(wishlist::where('client', $clientId)->with('wishlistProperties')->get());
    }

    public function getWishlistViaId($wishlistId)
    {
        return wishlist::where('id', $wishlistId)->with(['wishlistProperties'])->first();
    }



    // POST
    public function createClientWishlist(Request $request)
    {
        $wishlist = new wishlist();
        $wishlist->id = $this->generateId->generate(wishlist::class, 12);
        $wishlist->client = $request->clientId;
        $wishlist->name = $request->wishlistName;

        if($wishlist->save())
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

    public function createClientWishlistAndPutProperty(Request $request)
    {
        $wishlistId = $this->generateId->generate(wishlist::class, 12);
        $wishlist = new wishlist();
        $wishlist->id = $wishlistId;
        $wishlist->client = $request->clientId;
        $wishlist->name = $request->wishlistName;

        if($wishlist->save())
        {
            $wishlistPropertyId = $this->generateId->generate(wishlist_properties::class, 6);
            $wishlistProperty = new wishlist_properties();
            $wishlistProperty->id = $wishlistPropertyId;
            $wishlistProperty->wishlist = $wishlistId;
            $wishlistProperty->property = $request->propertyId;

            if($wishlistProperty->save()) 
            {

                $wishlistPropInWishlist = wishlist_properties::where('wishlist', $wishlistId)->with(['property'])->get();
                
                return response()->json([
                    'status' => 200,
                    'message' => "Added to {$request->wishlistName}",
                    'wishlist' => [
                        'id' => $wishlistId,
                        'client' => $request->clientId,
                        'name' => $request->wishlistName,
                        'wishlist_properties' => $wishlistPropInWishlist
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
        else
        {
            return response()->json([
                'status' => 401,
                'message' => 'Something went wrong please try again later.'
            ]);
        }
    }
    
    public function removePropertyFromWishlist(Request $request)
    {
        try {
            $wishlists = wishlist::where('client', $request->clientId)->get();
            $wishlistName = '';

            foreach ($wishlists as $wishlist) {
                $wishlistToDel = wishlist_properties::where([
                    ['property', $request->propId],
                    ['wishlist', $wishlist->id]
                ])->first();

                if($wishlistToDel) {
                    $wishlistName = wishlist::where('id', $wishlist->id)->first();
                    $wishlistToDel->delete();
                }
            }

            return response()->json([
                'status' => 200,
                'message' => "Removed from {$wishlistName->name}"
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 401,
                'message' => 'Something went wrong when removing the property from the wishlist, please try again later. Error: ' . $e->getMessage()
            ]);
        }
    }

    public function addPropertyToWishlist(Request $request)
    {
        $wishlistPropId = $this->generateId->generate(wishlist_properties::class, 6);
        $wishlistProp = new wishlist_properties();
        $wishlistProp->id = $wishlistPropId;
        $wishlistProp->wishlist = $request->wishlistId;
        $wishlistProp->property = $request->propId;

        if($wishlistProp->save())
        {
            return response()->json([
                'status' => 200,
                'message' => "Added to {$request->wishlistName}",
                'id' => $wishlistPropId
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

    public function deleteWishlist(Request $request)
    {
        $wishlistName = "";
        $wishlist = wishlist::find($request->wishlistId);
        $wishlistProperties = wishlist_properties::where('wishlist', $request->wishlistId)->get();

        if($wishlist)
        {
            $wishlistName = $wishlist->name;

            foreach($wishlistProperties as $wishlistProperty)
            {
                $wishlistProperty->delete();
            }
            $wishlist->delete();
        }


        return response()->json([
            'status' => 200,
            'message' => "{$wishlistName} deleted."
        ]);
    }
}
