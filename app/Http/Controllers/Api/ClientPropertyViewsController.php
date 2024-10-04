<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\client_property_views;
use Illuminate\Http\Request;

class ClientPropertyViewsController extends Controller
{
    // POST
    public function addPropertyView(Request $request)
    {
        try 
        {
            $isViewExisting = client_property_views::where('client', $request->clientId)->where('property', $request->propId)->first();

            if($isViewExisting)
            {
                $isViewExisting->viewed_times ++;
                $isViewExisting->save();
            }
            else
            {
                $newView = new client_property_views();
                $newView->client = $request->clientId;
                $newView->property = $request->propId;
                $newView->viewed_times = 1;
                $newView->save();
            }
            
            return response()->json([
                'status' => 200,
                'message' => 'Success'
            ]);
        }
        catch(\Exception $ex)
        {
            return response()->json([
                'status' => 500,
                'message' => $ex->getMessage()
            ], 500);
        }

    }
}
