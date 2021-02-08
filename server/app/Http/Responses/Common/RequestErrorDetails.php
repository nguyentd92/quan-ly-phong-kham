<?php


namespace App\Http\Responses\Common;


class RequestErrorDetails
{
    private $message;
    private $errors;

    public function __construct($message = "", $errors = [])
    {
        $this->message = $message;
        $this->errors = $errors;
    }
}
