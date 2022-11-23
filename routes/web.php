<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/employee/list', [EmployeesController::class, 'getEmployeeList'])->name('employee.list');
Route::post('/post/employee/details', [EmployeesController::class, 'getEmployeeDetails'])->name('employee.details');
Route::post('/post/employee/update', [EmployeesController::class, 'updateEmployeeDetails'])->name('employee.update');
Route::delete('/delete/employee/data/{employee}', [EmployeesController::class, 'deleteEmployeeData'])->name('employee.delete');
Route::post('/create/employee/data', [EmployeesController::class, 'createEmployeeData'])->name('employee.create');