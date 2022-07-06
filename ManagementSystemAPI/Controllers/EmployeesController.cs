using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ManagementSystem.DataModel.Entities;
using ManagementSystemAPI.Services.Interface;
using Microsoft.AspNetCore.Authorization;
using ManagementSystem.DataModel.DTO;

namespace ManagementSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeesController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        // GET: api/Employees
        [HttpGet]
        [Authorize(Policy = "2")]
        public async Task<List<Employee>> GetEmployees()
        {
            return await _employeeService.GetAllEmployees();
        }
        [HttpGet("manager/{managerId}")]
        public async Task<List<EmployeeDetails>> GetEmployeesByManagerId(int managerId)
        {
            return await _employeeService.GetEmployeeByManager(managerId);
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]

        public async Task<Employee> GetEmployee(int id)
        {
            var employee =  await _employeeService.GetEmployeeById(id);
            return employee;
        }

        [HttpGet("Employee/{id}")]

        public async Task<string> GetEmployeeName(int id)
        {
            var employeeName = await _employeeService.GetEmployeeNameById(id);
            return employeeName;
        }

        // PUT: api/Employees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Policy = "2")]
        public async Task<int> PutEmployee(int id, Employee employee)
        {
            return await _employeeService.UpdateEmployee(employee);
        }

        // POST: api/Employees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Policy = "2")]
        public async Task<int> PostEmployee(Employee employee)
        {
           return await _employeeService.AddEmployee(employee);
        }

        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        [Authorize(Policy = "2")]
        public async Task<string> DeleteEmployee(int id)
        {
           return await _employeeService.DeleteEmployee(id);
        }

    }
}
