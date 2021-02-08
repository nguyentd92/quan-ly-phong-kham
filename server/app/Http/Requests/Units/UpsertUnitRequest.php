<?php

namespace App\Http\Requests\Units;

use App\Http\Requests\Common\ApiRequest;

class UpsertUnitRequest extends ApiRequest
{
    /**
     * @var mixed
     */

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
            'name' => 'required|max:100',
            'sign' => 'required|max:10'
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Name is required',
            'name.max' => 'Name is max length 100',
            'sign.required' => 'Sign is required',
            'sign.max' => 'Sign is max length 10',
        ];
    }
}
