<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Employee;

class EmployeeController extends Controller
{
    //Get Employyee List from Database
    public function getEmployeeList() {
        try {
           $employees = Employee::orderBy('id', 'DESC')->get();
           return response()->json($employees);
        }
        catch(Exception $e){
           Log::error($e);
        }
    }

    //Get Individual Employee Details from Database
    public function getEmployeeDetails(Request $request) {
        try {
            $employeeData = Employee::findOrFail($request->get('employeeId'));
            return response()->json($employeeData);
         }
         catch(Exception $e){
            Log::error($e);
         }
    }

    //Updating employee data
    public function updateEmployeeData(Request $request) {
      try{
         //dd($request);
          $employeeId = $request->get('employeeId');
          $employeeName = $request->get('employeeName');
          $employeeSalary = $request->get('employeeSalary');

          Employee::where('id', $employeeId)->update([
            'employee_name' =>  $employeeName,
            'Salary' => $employeeSalary
          ]);

          return response()->json([
            'employee_name' =>  $employeeName,
            'Salary' => $employeeSalary
          ]);
      }
      catch(Exception $e) {
         Log::error($e);
      }
    }

    //Deleting Employee

    public function destroy(Employee $employee) {
        try{
           $employee->delete();
        }
        catch(Exception $e) {
            Log::error($e);
        }
    }

    public function store(Request $request) {
      try{
         $employeeName = $request->get('employeeName');
         $employeeSalary = $request->get('employeeSalary');

         Employee::create([
            'employee_name' =>  $employeeName,
            'Salary' => $employeeSalary
         ]);

         return response()->json([
            'employee_name' =>  $employeeName,
            'Salary' => $employeeSalary
          ]);

      }catch(Exception $e) {
         Log::error($e);
      }
    }

   }