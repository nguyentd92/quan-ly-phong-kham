<?php

namespace App\Http\Requests\Accounts;

use App\Http\Requests\Common\ApiRequest;
use App\Models\Account;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ChangeAccountPasswordRequest extends ApiRequest
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
        $account = Account::find(Auth::user()->account_id);
        return [
            'current_password' => [
                'required', function ($attribute, $value, $fail) use ($account) {
                    if(!Hash::check($value, $account->password)) {
                        return $fail(__('Mật khẩu hiện tại không đúng'));
                    }
                }],
                'password' => 'required|min:8|confirmed|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/'            
        ];
    }

    public function messages()
    {
        return [
            'current_password.required' => 'Mật khẩu hiện tại không được để trống',
            'password.required' => 'Mật khẩu không được để trống',
            'password.min' => 'Mật khẩu tối thiểu 8 kí tự',
            'password.regex' => 'Mật khẩu phải bao gồm ít nhất 1 chữ hoa, 1 chữ thường và 1 số',
            'password.confirmed' => 'Mật khẩu không khớp'
        ];
    }
}
