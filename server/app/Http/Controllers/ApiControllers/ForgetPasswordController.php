<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Mail\ResetPasswordMail;
use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;

class ForgetPasswordController extends Controller
{
    public function sendMail(Request $request)
    {
        if ($this->validateEmail($request->email)) {

            $token = $this->createToken($request->email);
            Mail::send('emails.name', ['token' => $token], function ($message) use ($request) {
                $message->from('tcnt28ntp@gmail.com');
                $message->to($request->email);
                $message->subject('Reset Password Notification');
            });
            return response()->json([
                'data' => "Reset Email is send successfully, please check your inbox"
            ], Response::HTTP_OK);
        }
        return response()->json([
            'error' => "Email doesn't found on our database"
        ], Response::HTTP_NOT_FOUND);
    }

    public function createToken($email)
    {
        $oldToken = DB::table('password_resets')->where('email', $email)->first();
        if ($oldToken) {
            return $oldToken;
        }
        $token = Str::random(60);
        $this->saveToken($token, $email);
        return $token;
    }

    public function saveToken($token, $email)
    {
        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);
    }


    public function validateEmail($email)
    {
        return Account::where('email', $email)->first();
    }


    public function ResetPassword(Request $request)
    {
        $updatePassword = DB::table('password_resets')
            ->where(['token' => $request->token])
            ->first();

        if (!$updatePassword) {
            return response()->json([
                'error' => "Invalid token!"
            ], Response::HTTP_NOT_FOUND);
        }

        $account = Account::where('email', $updatePassword->email)
            ->update(['password' => bcrypt($request->password)]);

        DB::table('password_resets')->where(['email' => $updatePassword->email])->delete();
        return response()->json([
            'data' => "Change Password is send successfully"
        ], Response::HTTP_OK);
    }
}
