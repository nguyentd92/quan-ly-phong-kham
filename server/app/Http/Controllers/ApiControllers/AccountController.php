<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Accounts\ChangeAccountPasswordRequest;
use App\Http\Requests\Accounts\CreateAccountRequest;
use App\Models\Account;
use App\Repositories\Contracts\AccountRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    /**
     * @var AccountRepository
     */
    protected $accountRepository;

    public function __construct(AccountRepository $accountRepository)
    {
        $this->accountRepository = $accountRepository;
    }

    public function getList(): JsonResponse {
        $result = $this->accountRepository->getList();

        return response()->json($result, JsonResponse::HTTP_OK);
    }

    public function getById($id): JsonResponse {
        $result = $this->accountRepository->getSingle($id);

        if($result == false) {
            return response()->json(null, JsonResponse::HTTP_NOT_FOUND);
        }

        return response()->json($result, JsonResponse::HTTP_NOT_FOUND);
    }

    public function resetPassword($id): JsonResponse {
        // TODO implement method

        return response()->json("Reset password for $id have not implemented yet");
    }

    public function create(CreateAccountRequest $request): JsonResponse {
        // Check if account with email is already existed, then throw 409 response
        $current = Account::query()->where('email',$request->post('email'))->first();

        if($current) {
            return response()->json("Email are already existed", JsonResponse::HTTP_CONFLICT);
        }

        // Store Account Into Database
        $account = $this->accountRepository->store([
            'f_name' => $request->post("first_name"),
            'm_name' => $request->post("middle_name"),
            'l_name' => $request->post("last_name"),
            'pre_name' => $request->post("pre_name"),
            'address' => $request->post("address"),
            'phone' => Hash::make($request->post("phone")),

            'email' => $request->post("email"),
            'password' => Hash::make($request->post("password")),
        ]);

        return response()->json($account, JsonResponse::HTTP_CREATED);
    }

    public function delete($id): JsonResponse {
        $result = $this->accountRepository->delete($id);

        if($result) {
            return response()->json(null, JsonResponse::HTTP_NO_CONTENT);
        }

        return response()->json(null, JsonResponse::HTTP_NOT_FOUND);
    }

    public function changePassword(ChangeAccountPasswordRequest $request) {


        $id = Auth::guard('api')->user()->account_id;
        $account = Account::findOrFail($id);
        $account->password = Hash::make($request->password);
        $account->save();

        return response()->json('Thay đổi mật khẩu thành công', JsonResponse::HTTP_OK);
    }
}
