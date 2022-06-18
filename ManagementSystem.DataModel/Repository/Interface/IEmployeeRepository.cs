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
        List<Employee> GetAllEmployees();
        Employee GetEmployeeById(int id);
        List<Employee> GetEmployeeByManager(int managerId);
        int AddEmployee(Employee employee); 
        int UpdateEmployee(Employee employee); 
        String DeleteEmployee(int id);   
    }
}
