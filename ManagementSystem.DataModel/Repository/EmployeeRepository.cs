using ManagementSystem.DataModel.DTO;
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
        public async Task<int> AddEmployee(Employee employee)
        {
            try
            {
                _context.Employees.Add(employee);
                await _context.SaveChangesAsync();
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
           
            
        }

        public async Task<string> DeleteEmployee(int id)
        {
           Employee employee = _context.Employees.Find(id);
            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();
            return "Removed " + employee.EmployeeName + " Succesfully";
        }

        public  async Task<List<Employee>> GetAllEmployees()
        {
            try
            {
               return await _context.Employees.ToListAsync();
            }
            catch (Exception)
            {

                throw;
            }
            
        }

        public async Task<Employee> GetEmployeeById(int id)
        {
            return await  _context.Employees.FirstOrDefaultAsync(x=>x.EmployeeId==id);
        }

        public async Task<List<EmployeeDetails>> GetEmployeeByManager(int managerId)
        {
            return await _context.Employees.Where(x => x.ManagerId == managerId).Select(x => new EmployeeDetails { EmployeeId= x.EmployeeId,EmployeeName=x.EmployeeName, DesignationName=x.DesignationName, DateOfJoining=x.DateOfJoining, EmailId=x.EmailId, ContactNo=x.ContactNo }).ToListAsync();
        }
        public async Task<string> GetEmployeeNameById(int employeeId)
        {
            return await _context.Employees.Where(x => x.EmployeeId == employeeId).Select(x => x.EmployeeName).FirstOrDefaultAsync();
        }

        public async Task<int> UpdateEmployee(Employee employee)
        {           
            _context.Entry(employee).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return  1;
        }
    }
}
