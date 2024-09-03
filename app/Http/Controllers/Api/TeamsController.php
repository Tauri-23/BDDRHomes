<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateFilenameService;
use App\Contracts\IGenerateIdService;
use App\Http\Controllers\Controller;
use App\Models\teams;
use Illuminate\Http\Request;

class TeamsController extends Controller
{
    protected $generateId, $generateFilename;

    public function __construct(IGenerateIdService $generateId, IGenerateFilenameService $generateFilename)
    {
        $this->generateId = $generateId;
        $this->generateFilename = $generateFilename;
    }

    // GET
    public function GetTeams()
    {
        return response()->json(teams::with("agents")->get());
    }


    // POST
    public function CreateTeamPost(Request $request)
    {
        $isTeamNameExist = teams::where('name', $request->name)->exists();
        $isTeamTagExist = teams::where('tag', $request->tag)->exists();

        if(!$request->file('logo'))
        {
            return response()->json([
                'status' => 401,
                'message' => 'Something went wrong adding team please try again later.'
            ]);
        }

        if($isTeamNameExist)
        {
            return response()->json([
                'status' => 401,
                'message' => "Team name $request->name already exist."
            ]);
        }

        if($isTeamTagExist)
        {
            return response()->json([
                'status' => 401,
                'message' => "Team tag $request->tag already exist."
            ]);
        }


        $teamId = $this->generateId->generate(teams::class, 12);
        

        try{
            $photo = $request->file('logo');

            $targetDirectory = base_path('react/src/assets/media/teams');
            $newFilename = $this->generateFilename->generate($photo, $targetDirectory);
    
            //upload the file to the public directory
            $photo->move($targetDirectory, $newFilename);
            $team = new teams();
            $team->id = $teamId;
            $team->name = $request->name;
            $team->tag = $request->tag;
            $team->logo = $newFilename;
            $team->save();

            return response()->json([
                'status' => 200,
                'message' => "Team $request->name added."
            ]);

        }
        catch(\Exception $ex)
        {
            return response()->json([
                'status' => 500,
                'message' =>'Failed to upload file: ' . $ex->getMessage()
            ]);
        }
    }
}
