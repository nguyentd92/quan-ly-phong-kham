<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\CreateSettingRequest;
use App\Http\Requests\Settings\UpdateSettingRequest;
use App\Repositories\Contracts\SettingRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    //
    /**
     * @var SettingRepository
     */
    protected $settingRepository;

    public function __construct(SettingRepository $settingRepository)
    {
        $this->settingRepository = $settingRepository;
    }

    public function list() {
        return response()->json($this->settingRepository->getList()->map(
            function($el) {
                return [
                    "key" => $el->key,
                    "display_name" => $el->setting_name,
                    "value" => $el->value
                ];
            }
        ));
    }

    public function store(CreateSettingRequest $request) {
        $entity = $this->settingRepository->store([
            'key' => $request->post('key'),
            'value' => $request->post('value'),
            'setting_name' => $request->post('display_name')
        ]);

        return response()->json($entity, JsonResponse::HTTP_CREATED);
    }

    public function update($key, UpdateSettingRequest $request) {
        $entity = $this->settingRepository->update($key ,[
            'key' => $request->post('key'),
            'value' => $request->post('value'),
            'setting_name' => $request->post('display_name')
        ]);

        if($entity == false) {
            return response()->json($entity, JsonResponse::HTTP_NOT_FOUND);
        }

        return response()->json($entity, JsonResponse::HTTP_OK);
    }
}
