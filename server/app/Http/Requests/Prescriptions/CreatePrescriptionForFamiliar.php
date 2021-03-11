<?php

namespace App\Http\Requests\Prescriptions;

use App\Http\Requests\Common\ApiRequest;

class CreatePrescriptionForFamiliar extends ApiRequest
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
            "p_id" => "required",

            "symptoms" => "",
            "pathology" => "required|min:3|max:250",

            "med_list" => "",

            "bill_total" => "required",
            "pres_price" => "required",

            "note" => ""
        ];
    }
}
