<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

use App\Models\user_clients;

class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'fname' => 'required|string|max:30',
            'mname' => 'nullable|string|max:30',
            'lname' => 'required|string|max:30',
            'gender' => 'required|string|max:30',
            'bdate' => 'required|date',
            'phone' => 'required|string|max:10',

            'uname' => 'required|string|unique:user_clients, username',
            'email' => 'required|email|unique:user_clients, email',
            'pass' => [
                'required',
                'confirmed',
                Password::min(8)
                ->letters()
                ->symbols()
                ->max(16)
            ],
        ];
    }
}
