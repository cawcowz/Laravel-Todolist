<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/',[TaskController::class,'index']);
Route::post('/',[TaskController::class,'store']);
Route::post('/update/{id}',[TaskController::class,'update']);
Route::delete('/destroy/{id}',[TaskController::class,'destroy']);
Route::get('/contact',[ContactController::class,'index']);
// Route::get('/task',[TodoController::class,'index']);