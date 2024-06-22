<?php
namespace App\Services;
use App\Contracts\IGenerateIdService;

class GenerateIdService implements IGenerateIdService {
    public function generate($modelInstance, $digit) {
        // Calculate the maximum value based on the number of digits
        $maxValue = pow(10, $digit) - 1;
    
        do {
            // Generate a random number within the range [1, $maxValue]
            $randNum = mt_rand(1, $maxValue);
    
            // Check if the generated ID already exists in the database
            $ifExist = $modelInstance::where('id', $randNum)->exists();
        } while ($ifExist);
    
        return $randNum;
    }


}