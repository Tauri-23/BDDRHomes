<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateFilenameService;
use App\Http\Controllers\Controller;
use App\Models\user_clients;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    protected $generateFilename;

    public function __construct(IGenerateFilenameService $generateFilename)
    {
        $this->generateFilename = $generateFilename;
    }


    public function GetAllClients()
    {
        $clients = user_clients::with(["prefered_locations", "employment_type"])->get();
        return response()->json($clients);
    }
    
    public function GetAllClientsWithPropViews()
    {
        $clients = user_clients::with(["prefered_locations", "employment_type", 'property_views'])->get();
        return response()->json($clients);
    }

    public function GetClientsInfo($clientId)
    {
        $clients = user_clients::find($clientId);
        return response()->json($clients);
    }





    // POST
    public function updatePfp(Request $request)
    {
        $client = user_clients::find($request->client_id);

        if(!$client)
        {
            return response()->json(
                [
                    'status' => 400,
                    'message'=> "Client does'nt exist."
                ], 
                400
            );
        }

        try {
            $photo = $request->file("pfp");

            $targetDirectory = base_path("react/src/assets/media/clients/pfp");
            $newFilename = $this->generateFilename->generate($photo, $targetDirectory);

            $photo->move($targetDirectory, $newFilename);

            $client->pfp = $newFilename;
            $client->save();

            return response()->json([
                'status' => 200,
                'message' => "profile picture updated",
                'client' => $client
            ], 200);
        }
        catch(\Exception $ex) 
        {
            return response()->json([
                'status' => 500,
                'message' =>'Failed to upload file: ' . $ex->getMessage()
            ], 500);
        }
    }

    public function UpdateClientInfo(Request $request)
    {
        $client = user_clients::find($request->client_id);

        if(!$client)
        {
            return response()->json([
                'status' => 404,
                'message' => 'Client not found.'
            ]);
        }

        switch($request->editType)
        {
            case 'name':
                $client->firstname = $request->fname;
                $client->middlename = $request->mname ? $request->mname : null;
                $client->lastname = $request->lname;
                break;
            case 'email':
                $client->email = $request->email;
                break;
            case 'phone':
                $client->phone = $request->phone;
                break;
            case 'empType':
                $client->employment_type = $request->empTypeId;
                break;
            default:
                return response()->json([
                    'status' => 401,
                    'message' => 'Invalid request type.'
                ]);
                
        }
        $client->save();
        return response()->json([
            'status' => 200,
            'message' => 'Profile information updated',
            'client' => $client
        ]);
    }
}
