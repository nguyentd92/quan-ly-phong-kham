<?php

namespace App\Http\Requests\Accounts;

use App\Http\Requests\Common\ApiRequest;

class CreateAccountRequest extends ApiRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|max:50',
            'middle_name' => 'max:50',
            'last_name' => 'required|max:50',
            'pre_name' => 'max:50',
            'phone' => 'max:20',
            'address' => 'max:254',
            'email' => 'required|email:rfc,dns',
            'password' => 'min:8|max:20'
        ];
    }
}
