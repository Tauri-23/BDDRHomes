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
        $clients = user_clients::all();
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
}
