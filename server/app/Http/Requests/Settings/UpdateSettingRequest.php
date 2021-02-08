<?php

namespace App\Http\Requests\Settings;

use App\Http\Requests\Common\ApiRequest;

class UpdateSettingRequest extends ApiRequest
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
            "display_name" => "required|min:3|max:255",
            "value" => "required|min:5|max:255"
        ];
    }
}
