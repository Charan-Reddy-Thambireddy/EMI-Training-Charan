using ManagementSystem.DataModel.Entities;
using ManagementSystem.DataModel.Repository.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystem.DataModel.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly ManagementSystemContext _context;

        public EmployeeRepository(ManagementSystemContext context)
        {
            _context = context;
        }
        public int AddEmployee(Employee employee)
        {
            try
            {
                _context.Employees.Add(employee);
                _context.SaveChanges();
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
           
            
        }

        public string DeleteEmployee(int id)
        {
           Employee employee = _context.Employees.Find(id);
            _context.Employees.Remove(employee);
            _context.SaveChanges();
            return "Removed " + employee.EmployeeName + " Succesfully";
        }

        public  List<Employee> GetAllEmployees()
        {
            try
            {
                return  _context.Employees.ToList();
            }
            catch (Exception)
            {

                throw;
            }
            
        }

        public Employee GetEmployeeById(int id)
        {
            return _context.Employees.FirstOrDefault(x=>x.EmployeeId==id);
        }

        public List<Employee> GetEmployeeByManager(int managerId)
        {
            return _context.Employees.Where(x => x.ManagerId == managerId).ToList();
        }

        public int UpdateEmployee(Employee employee)
        {           
            _context.Entry(employee).State = EntityState.Modified;
            _context.SaveChanges();
            return 1;
        }
    }
}
