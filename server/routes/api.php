<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiControllers\UnitController;
use App\Http\Controllers\ApiControllers\AccountController;
use App\Http\Controllers\ApiControllers\SettingController;
use App\Http\Controllers\ApiControllers\MedicineController;
use App\Http\Controllers\ApiControllers\SymptomController;
use App\Http\Controllers\ApiControllers\AuthController;
use App\Http\Controllers\ApiControllers\MedicationsController;

use App\Enums\Permissions\AccountPermissions;
use App\Http\Controllers\ApiControllers\ForgetPasswordController;
use App\Http\Controllers\ApiControllers\PrescriptionsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('_auth:api')->get('user', function (Request $request) {
    return $request->user();
});

Route::name("sendPasswordResetLink")->post('sendPasswordResetLink', [ForgetPasswordController::class, 'sendMail']);
Route::name("ResetPassword")->post('ResetPassword', [ForgetPasswordController::class, 'ResetPassword']);

Route::name('_auth')->prefix('_auth')->group(function () {
    //
    Route::name('.login')->post('login', [AuthController::class, 'login']);

    // Forgot Password
    Route::name('.forgotPassword')->post('forgot-password', function (Request $request) {
        return response()->json($request);
    });
});

// Prescriptions Routes
Route::name('prescriptions')->prefix('prescriptions')->group(function () {

    Route::name('.list')->get('/', function (Request $request) {
        return response()->json($request);
    });

    Route::name('.store')->post('store', function () {
        return response()->json("Stored");
    });

    Route::name('.createForFamiliar')->post(
        'create-for-familiar/{id}',
        [PrescriptionsController::class, 'createForFamiliar']
    );

    Route::name('.createForGuest')->post(
        'create-for-guest',
        [PrescriptionsController::class, 'createForGuest']
    );

    Route::name('.createReExam')->post(
        'create-reexam/{id}',
        [PrescriptionsController::class, 'createReExam']
    );

    Route::name('.delete')->delete('{id}', function (string $id) {
        return response()->json([
            'id' => $id
        ]);
    });

    Route::name('.bill')->get('{id}/bill', function (string $id) {
        return $id;
    });
});


// Accounts Management Routes
Route::name('accounts')
    ->middleware('_auth:api')
    ->prefix('accounts')->group(function () {
        // List Accounts
        Route::name('.list')
            ->middleware('can:' . AccountPermissions::GET_ACCOUNT)
            ->get('/', [AccountController::class, 'getList']);

        // Get Employee Details
        Route::name('.details')
            ->middleware('can:' . AccountPermissions::GET_ACCOUNT)
            ->get('{id}', [AccountController::class, 'getById']);

        // Create Account
        Route::name('.create')
            ->middleware('can:' . AccountPermissions::CREATE_ACCOUNT)
            ->post('/', [AccountController::class, 'create']);

        // Reset Password
        Route::name('.resetPassword')->post('{id}/reset-password', [AccountController::class, 'resetPassword']);

        // Update Employees
        Route::name('.update')->put('{id}', [AccountController::class, 'update']);

        // Set Permission Employees
        Route::name('.updatePermissions')->patch('{id}/permissions', [AccountController::class, 'updateAccountPermissions']);

        // Delete Employees
        Route::name('.delete')->delete('{id}', [AccountController::class, 'delete']);
    });

// Units Management Routes
Route::name('units')->prefix('units')->group(function () {
    // List Units
    Route::name('.list')->get('/', [UnitController::class, 'getList']);

    // Unit Details
    Route::name('.details')->get('{id}', [UnitController::class, 'getSingle']);

    // Create Unit
    Route::name('.create')->post('/', [UnitController::class, 'store']);

    // Update Unit
    Route::name('.update')->put('{id}', [UnitController::class, 'update']);

    // Delete Unit
    Route::name('.update')->delete('{id}', [UnitController::class, 'delete']);
});

// Application Settings Routes
Route::name('settings')->prefix('settings')->group(function () {
    // Get List Settings
    Route::name('.list')->get('/', [SettingController::class, 'list']);

    // Create value
    Route::name('.create')->post('/', [SettingController::class, 'store']);

    // Update value
    Route::name('.update')->put('{key}', [SettingController::class, 'update']);
});

// Medicines Management Routes
Route::name('medicines')->prefix('medicines')->group(function () {
    // Get List Settings
    Route::name('.list')->get('/', [MedicineController::class, 'getAll']);

    // Create value
    Route::name('.create')->post('/', [MedicineController::class, 'store']);

    // Update value
    Route::name('.update')->put('{id}', [MedicineController::class, 'update']);

    // Get Medicine Details
    Route::name('.update')->put('{id}', [MedicineController::class, 'getDetails']);
});

// Storage Management Routes
Route::name('storage')->prefix('storage')->group(function () {
    Route::name('.medicines')->prefix('medicines')->group(function () {
        // Import medicine
        Route::name('.import')->post('{medicineId}', [MedicineController::class, 'importMedicine']);

        // List medicines in stock
        Route::name('.inStock')->put('/', [MedicineController::class, 'getListInStock']);

        // Get Medicine Details
        Route::name('.details')->put('{id}', [MedicineController::class, 'getDetails']);
    });
});

// Symptoms Routes
Route::name('symptoms')->prefix('symptoms')->group(function () {
    // Create symptom
    Route::name('.store')->post('/', [SymptomController::class, 'store']);

    // List symptom
    Route::name('.list')->get('/', [SymptomController::class, 'getAll']);

    // Update symptom
    Route::name('.update')->put('{id}', [SymptomController::class, 'update']);

    // Delete symptom
    Route::name('.delete')->delete('{id}', [SymptomController::class, 'delete']);
});

// Medicines Management Routes
Route::name('medications')->prefix('medications')->group(function () {
    // Get List Settings
    Route::name('.list')->get('/', [MedicationsController::class, 'getAll']);

    // Create value
    Route::name('.create')->post('/', [MedicationsController::class, 'store']);

    // Update value
    Route::name('.update')->put('{id}', [MedicationsController::class, 'update']);

    // Get Medicine Details
    Route::name('.update')->put('{id}', [MedicationsController::class, 'getDetails']);
});
