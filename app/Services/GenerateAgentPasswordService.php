<?php
namespace App\Services;

use App\Contracts\IGenerateAgentPasswordService;
use Illuminate\Support\Str;

class GenerateAgentPasswordService implements IGenerateAgentPasswordService 
{
    public function generate($firstname, $lastname) 
    {
        $firstname = explode(" ", $firstname)[0];
        return strtolower("{$firstname}{$lastname}").rand(10, 100);
    }
}