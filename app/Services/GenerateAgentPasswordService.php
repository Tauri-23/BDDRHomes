<?php
namespace App\Services;

use App\Contracts\IGenerateAgentPasswordService;
use Illuminate\Support\Str;

class GenerateAgentPasswordService implements IGenerateAgentPasswordService {
    public function generate($firstname, $lastname) {
        return strtolower("{$firstname}{$lastname}").rand(10, 100);
    }
}