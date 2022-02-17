<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\CreateSettingRequest;
use App\Http\Requests\Settings\UpdateSettingRequest;
use App\Http\Responses\Common\RequestErrorDetails;
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

    public function getSingle($key): JsonResponse {
        $result = $this->settingRepository->getSingle($key);

        return response()->json($result);
    }

    public function store(CreateSettingRequest $request) {
        // Check if setting key is existed, throw error
        $key = $request->post('key');

        $current = $this->settingRepository->getSingle($key);

        if($current) {
            return response()->json(new RequestErrorDetails("Setting with key: $key is already existed"), JsonResponse::HTTP_CONFLICT);
        }

        // Store Entity Into DB
        $entity = $this->settingRepository->store([
            'key' => $key,
            'value' => $request->post('value'),
            'setting_name' => $request->post('display_name')
        ]);

        return response()->json($entity, JsonResponse::HTTP_CREATED);
    }

    public function update($key, UpdateSettingRequest $request): JsonResponse {
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

    public function delete($key): JsonResponse {
        $isDeleted = $this->settingRepository->delete($key);

        if($isDeleted) {
            return response()->json(null, JsonResponse::HTTP_NO_CONTENT);
        }

        return response()->json(null,JsonResponse::HTTP_NOT_FOUND);
    }
}
