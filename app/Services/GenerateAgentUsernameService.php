<?php
namespace App\Services;

use App\Contracts\IGenerateAgentUsernameService;

class GenerateAgentUsernameService implements IGenerateAgentUsernameService {
    public function generate($firstname, $lastname) {
        return strtolower("{$firstname}{$lastname[0]}").rand(100, 999);
    }


}