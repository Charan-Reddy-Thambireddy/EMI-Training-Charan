using ManagementSystem.DataModel.Entities;
using ManagementSystem.DataModel.Repository.Interface;
using ManagementSystemAPI.Services.Interface;
using System.Collections.Generic;

namespace ManagementSystemAPI.Services
{
    public class EmployeeService:IEmployeeService
    {
        private readonly IEmployeeRepository _IEmployeeRepository;

        public EmployeeService(IEmployeeRepository IEmployeeRepository)
        {
            _IEmployeeRepository= IEmployeeRepository;  
        }

        public int AddEmployee(Employee employee)
        {
            return _IEmployeeRepository.AddEmployee(employee);
        }

        public string DeleteEmployee(int id)
        {
            return _IEmployeeRepository.DeleteEmployee(id);
        }

        public List<Employee> GetAllEmployees()
        {
            return _IEmployeeRepository.GetAllEmployees();
        }

        public Employee GetEmployeeById(int id)
        {
            return _IEmployeeRepository.GetEmployeeById(id);
        }

        public int UpdateEmployee(Employee employee)
        {
            return _IEmployeeRepository.UpdateEmployee(employee);
        }
    }
}
