<?php

namespace App\Http\Requests\Medicines;

use App\Http\Requests\Common\ApiRequest;

class UpsertMedicineRequest extends ApiRequest
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
            'name' => 'required|min:3|max:50',
            'unit_sell_price' => 'required',
            'unit_sm_vol' => '',
            'unit_sm_id' => 'required',
            'images' => '',
            'medication_id' => 'required',
        ];
    }
}
