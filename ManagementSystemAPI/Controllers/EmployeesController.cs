using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ManagementSystem.DataModel.Entities;
using ManagementSystemAPI.Services.Interface;

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
        public List<Employee> GetEmployees()
        {
            return  _employeeService.GetAllEmployees();
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        public Employee GetEmployee(int id)
        {
            var employee =  _employeeService.GetEmployeeById(id);
            return employee;
        }

        // PUT: api/Employees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public int PutEmployee(int id, Employee employee)
        {
            return _employeeService.UpdateEmployee(employee);
        }

        // POST: api/Employees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public int PostEmployee(Employee employee)
        {
           return _employeeService.AddEmployee(employee);
        }

        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public  string DeleteEmployee(int id)
        {

           return _employeeService.DeleteEmployee(id);
        }

    }
}
