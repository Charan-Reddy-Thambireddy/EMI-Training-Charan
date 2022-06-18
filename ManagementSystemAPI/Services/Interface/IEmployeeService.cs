using ManagementSystem.DataModel.Entities;
using System;
using System.Collections.Generic;

namespace ManagementSystemAPI.Services.Interface
{
    public interface IEmployeeService
    {
        List<Employee> GetAllEmployees();
        Employee GetEmployeeById(int id);
        int AddEmployee(Employee employee);
        int UpdateEmployee(Employee employee);
        String DeleteEmployee(int id);
    }
}
