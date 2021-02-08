<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiControllers\UnitController;
use App\Http\Controllers\ApiControllers\AccountController;
use App\Http\Controllers\ApiControllers\SettingController;
use App\Http\Controllers\ApiControllers\MedicineController;
use App\Http\Controllers\ApiControllers\SymptomController;
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

Route::name('_auth')->prefix('_auth')->group(function() {
    //
    Route::name('.login')->post('login', function() {
        return "Login";
    });

    // Forgot Password
    Route::name('.forgotPassword')->post('forgot-password', function(Request $request) {
        return response()->json($request);
    });
});

// Examination Routes
Route::name('examination')->prefix('examination')->group(function() {

    Route::name('.list')->get('/', function(Request $request) {
        return response()->json($request);
    });

    Route::name('.store')->post('store', function() {
        return response()->json("Stored");
    });

    Route::name('.delete')->delete('{id}', function(String $id) {
        return response()->json([
            'id'=>$id
        ]);
    });

    Route::name('.bill')->get('{id}/bill', function(String $id) {
        return $id;
    });
});


// Accounts Management Routes
Route::name('accounts')->prefix('accounts')->group(function() {
    // List Accounts
    Route::name('.list')->get('/', [AccountController::class, 'getList']);

    // Get Employee Details
    Route::name('.details')->get('{id}', [AccountController::class, 'getById']);

    // Create Account
    Route::name('.create')->post('/', [AccountController::class, 'store']);

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
Route::name('units')->prefix('units')->group(function() {
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
Route::name('settings')->prefix('settings')->group(function() {
    // Get List Settings
    Route::name('.list')->get('/', [SettingController::class, 'list']);

    // Create value
    Route::name('.create')->post('/', [SettingController::class, 'store']);

    // Update value
    Route::name('.update')->put('{key}', [SettingController::class, 'update']);
});

// Medicines Management Routes
Route::name('medicines')->prefix('medicines')->group(function() {
    // Get List Settings
    Route::name('.list')->get('/', [MedicineController::class, 'list']);

    // Create value
    Route::name('.create')->post('/', [MedicineController::class, 'store']);

    // Update value
    Route::name('.update')->put('{id}', [MedicineController::class, 'update']);

    // Get Medicine Details
    Route::name('.update')->put('{id}', [MedicineController::class, 'getDetails']);
});

// Storage Management Routes
Route::name('storage')->prefix('storage')->group(function() {
    Route::name('.medicines')->prefix('medicines')->group(function() {
        // Import medicine
        Route::name('.import')->post('{medicineId}', [MedicineController::class, 'importMedicine']);

        // List medicines in stock
        Route::name('.inStock')->put('/', [MedicineController::class, 'getListInStock']);

        // Get Medicine Details
        Route::name('.details')->put('{id}', [MedicineController::class, 'getDetails']);
    });
});

// Symptoms Routes
Route::name('symptoms')->prefix('symptoms')->group(function() {
    // Create symptom
    Route::name('.store')->post('/', [SymptomController::class, 'store']);

    // List symptom
    Route::name('.list')->get('/', [SymptomController::class, 'getAll']);

    // Update symptom
    Route::name('.update')->put('{id}', [SymptomController::class, 'update']);

    // Delete symptom
    Route::name('.delete')->delete('{id}', [SymptomController::class, 'delete']);
});
