<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateIdService;
use App\Http\Controllers\Controller;
use App\Models\property_developers;
use App\Models\property_developers_projects;
use Illuminate\Http\Request;

class PropertyDevelopersProjectsController extends Controller
{
    protected $generateId;

    public function __construct(IGenerateIdService $generateId)
    {
        $this->generateId = $generateId;
    }


    // GET
    public function GetAllProjectsFull()
    {
        return response()->json(
            property_developers_projects::with('developer')->get()
        );
    }

    public function GetProjInfoFullById($projId)
    {
        return response()->json(
            property_developers_projects::where("id", $projId)->with('developer')->first()
        );
    }



    // POST
    public function CreateProject(Request $request)
    {
        $developer = property_developers::findOrFail($request->dev);
        $projectId = $this->generateId->generate(property_developers_projects::class, 12);

        $project = new property_developers_projects();
        $project->id = $projectId;
        $project->developer = $request->dev;
        $project->project_name = $request->name;
        $project->province_denormalized = $request->province_den;
        $project->city_denormalized = $request->city;
        $project->province = $request->prov;
        $project->city = $request->cit;

        if($project->save())
        {
            $developer->touch(); //update developer timestamp

            return response()->json([
                'status' => 200,
                'message'=> "Project $request->name added."
            ]);
        }
        else {
            return response()->json([
                'status' => 401,
                'message'=> 'Something went wrong please try again later.'
            ]);
        }
    }
}
