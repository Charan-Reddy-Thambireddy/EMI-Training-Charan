using ManagementSystem.DataModel.DTO;
using ManagementSystem.DataModel.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ManagementSystemAPI.Services.Interface
{
    public interface IEmployeeService
    {
        Task<List<Employee>> GetAllEmployees();
        Task<Employee> GetEmployeeById(int id);
        Task<List<EmployeeDetails>> GetEmployeeByManager(int managerId);
        Task<string> GetEmployeeNameById(int employeeId);
        Task<int> AddEmployee(Employee employee);
        Task<int> UpdateEmployee(Employee employee);
        Task<String> DeleteEmployee(int id);
    }
}
