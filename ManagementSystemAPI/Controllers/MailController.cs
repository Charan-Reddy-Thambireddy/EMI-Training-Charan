using ManagementSystem.DataModel.Entities;
using ManagementSystemAPI.Services;
using ManagementSystemAPI.Services.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace ManagementSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        private readonly IRequestService _requestService;
        private readonly MailService _mailService;
        private readonly IEmployeeService _employeeService;

        public MailController(IRequestService requestService, MailService mailService, IEmployeeService employeeService)
        {
            _requestService = requestService;
            _mailService = mailService;
            _employeeService = employeeService; 
        }
        [HttpGet]
        [Route("Mail")]
        public async Task smtpMailer(int employeeId, int status, int requestId)
        {
            try
            {
                Employee employee = await _employeeService.GetEmployeeById(employeeId);
                _mailService.smtpMailer(employee.EmailId, status, requestId);
            }
            catch (Exception ex)
            {

            }
        }
    }
}
