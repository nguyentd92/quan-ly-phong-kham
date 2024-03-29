<?php

namespace App\Http\Requests\Patients;

use App\Http\Requests\Common\ApiRequest;

class UpsertPatientRequest extends ApiRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'full_name' => 'required|min:2|max:100'
        ];
    }
}
