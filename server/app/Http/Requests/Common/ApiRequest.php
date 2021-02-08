<?php


namespace App\Http\Requests\Common;


use App\Http\Responses\Common\RequestErrorDetails;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class ApiRequest extends FormRequest
{
    public function failedValidation(Validator $validator)
    {
        $errors = (new ValidationException($validator))->errors();
        throw new HttpResponseException(response()->json(
            new RequestErrorDetails("Validation Errors", $errors), JsonResponse::HTTP_UNPROCESSABLE_ENTITY));
    }
}
