<?php

namespace App\Http\Controllers;

use Log;
use Exception;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeesController extends Controller
{
    // Get Employee List From DB.
    public function getEmployeeList() 
    {
        try
        {
            $employees = Employee::orderBy('id', 'DESC')->get();
            return response()->json($employees);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    // Get Employee Details by Id
    public function getEmployeeDetails(Request $request)
    {
        try
        {
            $employeeDetails = Employee::findOrFail($request->get('employeeId'));
            return response()->json($employeeDetails);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    // Update Employee Details
    public function updateEmployeeDetails(Request $request)
    {
        try
        {
            $employeeId    = $request->get('employeeId');
            $employee_name = $request->get('employee_name');
            $salary        = $request->get('salary');

            Employee::where('id', $employeeId)->update([
                'employee_name' => $employee_name,
                'salary'        => $salary
            ]);

            return response()->json();
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    // Delete Employee Data
    public function deleteEmployeeData(Employee $employee)
    {
        try
        {
            $employee->delete();
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    // Create Employee Data
    public function createEmployeeData(Request $request)
    {
        try
        {
            $employee_name = $request->get('employee_name');
            $salary        = $request->get('salary');

            Employee::create([
                'employee_name' => $employee_name,
                'salary'        => $salary
            ]);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


}
