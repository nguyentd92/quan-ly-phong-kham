<?php

namespace App\Http\Requests\Prescriptions;

use App\Http\Requests\Common\ApiRequest;

class CreatePrescriptionForGuest extends ApiRequest
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
            "p_full_name" => "required|min:5|max:100",
            "p_dob" => "required",
            "p_gender" => "required",
            "p_guardian" => "",
            "p_phone" => "required",
            "p_address" => "required",

            "symptoms" => "required|min:5|max:200",
            "pathology" => "required|min:3|max:250",

            "med_list" => "",

            "bill_total" => "required",
            "pres_price" => "required",

            "note" => ""
        ];
    }
}
