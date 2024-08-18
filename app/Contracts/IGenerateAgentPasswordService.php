<?php
namespace App\Contracts;

interface IGenerateAgentPasswordService {
    public function generate($firstname, $lastname);
}