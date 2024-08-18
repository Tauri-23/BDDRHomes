<?php
namespace App\Contracts;

interface IGenerateAgentUsernameService {
    public function generate($firstname, $lastname);
}