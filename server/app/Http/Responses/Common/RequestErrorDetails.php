<?php


namespace App\Http\Responses\Common;


class RequestErrorDetails
{
    public $message;
    public $errors;

    public function __construct($message = "", $errors = [])
    {
        $this->message = $message;
        $this->errors = $errors;
    }
}
