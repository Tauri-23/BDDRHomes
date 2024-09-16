<?php
namespace App\Services;
use App\Contracts\IGenerateIdService;

class GenerateIdService implements IGenerateIdService {
    public function generate($modelInstance, $digit) {
        // Calculate the maximum and minimum value based on the number of digits
        $minValue = pow(10, $digit - 1); // Minimum number with the required number of digits
        $maxValue = pow(10, $digit) - 1; // Maximum number with the required number of digits
    
        do {
            // Generate a random number within the range [$minValue, $maxValue]
            $randNum = mt_rand($minValue, $maxValue);
    
            // Check if the generated ID already exists in the database
            $ifExist = $modelInstance::where('id', $randNum)->exists();
        } while ($ifExist);
    
        return $randNum;
    }


}