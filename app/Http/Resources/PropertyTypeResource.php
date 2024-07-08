<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PropertyTypeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'icon' => $this->icon,
            'type_name' => $this->type_name,
            'created_at' => $this->created_at->format('M d, Y h:i a'),
            'updated_at' => $this->updated_at->format('M d, Y h:i a')
        ];
    }
}
