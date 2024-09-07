<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateFilenameService;
use App\Contracts\IGenerateIdService;
use App\Http\Controllers\Controller;
use App\Models\property_developers;
use Illuminate\Http\Request;

class DevelopersController extends Controller
{
    protected $generateId, $generateFilename;

    public function __construct(IGenerateIdService $generateId, IGenerateFilenameService $generateFilename)
    {
        $this->generateId = $generateId;
        $this->generateFilename = $generateFilename;
    }


    // GET
    public function GetAllDevelopersWithProperties()
    {
        $developers = property_developers::with(["properties"])->get();
        return response()->json($developers);
    }

    public function GetAllDevelopers()
    {
        return response()->json(property_developers::all());
    }



    // POST
    public function CreateDeveloper(Request $request)
    {
        $developerId = $this->generateId->generate(property_developers::class, 12);

        try
        {
            $photo = $request->file("logo");

            $targetDirectory = base_path("react/src/assets/media/developers");
            $newFilename = $this->generateFilename->generate($photo, $targetDirectory);

            $photo->move($targetDirectory, $newFilename);
            $developer = new property_developers();
            $developer->id = $developerId;
            $developer->name = $request->name;
            $developer->logo = $newFilename;
            $developer->save();

            return response()->json([
                'status' => 200,
                'message' => "Developer $request->name added."
            ]);

        } catch (\Exception $ex)
        {
            return response()->json([
                'status' => 500,
                'message' =>'Failed to upload file: ' . $ex->getMessage()
            ]);
        }
    }
}
