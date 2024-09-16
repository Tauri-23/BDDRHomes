<?php

namespace App\Http\Controllers;

use App\Models\client_prefered_locations;
use Illuminate\Http\Request;

class ClientPreferedLocation extends Controller
{
    public function getAllClientPreferedLoc($clientId)
    {
        return response()->json(client_prefered_locations::with('province')->where("client", $clientId)->get());
    }





    // POST
    public function updateClientPreferedLoc(Request $request)
    {
        $prefLocExist = client_prefered_locations::where('client', $request->clientId)
                ->where('province', $request->province)
                ->exists();

        if ($prefLocExist) 
        {
            $prefLocDel = client_prefered_locations::where('client', $request->clientId)
            ->where('province', $request->province)->delete();

            return response()->json([
                "status" => 200,
                "message"=> "Prefered location updated."
            ]);
        }
        else
        {
            $prefLoc = new client_prefered_locations();
            $prefLoc->client = $request->clientId;
            $prefLoc->province = $request->province;

            if( $prefLoc->save() )
            {
                $prefLocId = client_prefered_locations::where('client', $request->clientId)
                ->where('province', $request->province)->first()->id;

                return response()->json([
                    "status" => 200,
                    "prefLocid" => $prefLocId,
                    "message"=> "Prefered location updated."
                ]);
            }
        }
    }
}
