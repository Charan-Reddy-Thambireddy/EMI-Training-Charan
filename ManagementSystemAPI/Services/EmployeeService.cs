using ManagementSystem.DataModel.DTO;
using ManagementSystem.DataModel.Entities;
using ManagementSystem.DataModel.Repository.Interface;
using ManagementSystemAPI.Services.Interface;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ManagementSystemAPI.Services
{
    public class EmployeeService:IEmployeeService
    {
        private readonly IEmployeeRepository _IEmployeeRepository;

        public EmployeeService(IEmployeeRepository IEmployeeRepository)
        {
            _IEmployeeRepository= IEmployeeRepository;  
        }

        public async Task<int> AddEmployee(Employee employee)
        {
            return await _IEmployeeRepository.AddEmployee(employee);
        }

        public async Task<string> DeleteEmployee(int id)
        {
            return await _IEmployeeRepository.DeleteEmployee(id);
        }

        public async Task<List<Employee>> GetAllEmployees()
        {
            return await _IEmployeeRepository.GetAllEmployees();
        }

        public async Task<Employee> GetEmployeeById(int id)
        {
            return await _IEmployeeRepository.GetEmployeeById(id);
        }

        public async Task<List<EmployeeDetails>> GetEmployeeByManager(int managerId)
        {
            return await _IEmployeeRepository.GetEmployeeByManager(managerId);    

        }
        public async Task<string> GetEmployeeNameById(int employeeId)
        {
            return await _IEmployeeRepository.GetEmployeeNameById(employeeId);

        }

        public async Task<int> UpdateEmployee(Employee employee)
        {
            return await _IEmployeeRepository.UpdateEmployee(employee);
        }
    }
}
