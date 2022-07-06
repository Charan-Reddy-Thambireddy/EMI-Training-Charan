using ManagementSystem.DataModel.DTO;
using ManagementSystem.DataModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystem.DataModel.Repository.Interface
{
    public interface IEmployeeRepository
    {
        Task<List<Employee>> GetAllEmployees();
        Task<Employee>GetEmployeeById(int id);
        Task<List<EmployeeDetails>> GetEmployeeByManager(int managerId);
        Task<string> GetEmployeeNameById(int employeeId);
        Task<int> AddEmployee(Employee employee); 
        Task<int> UpdateEmployee(Employee employee); 
        Task<String> DeleteEmployee(int id);
        Task<List<ManagerList>> GetManagersList(int role);
    }
}
