using ManagementSystem.DataModel.Entities;
using ManagementSystemAPI.Services.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ManagementSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ITokenService _tokenService;

        public UsersController(IUserService userService, ITokenService tokenService)
        {
            _userService = userService;
            _tokenService = tokenService;
        }
        [HttpGet("{userName}/{password}")]
        public IActionResult GetEmployee(string userName,string password)
        {
            IActionResult response = Unauthorized();
            Employee employee = _userService.GetEmployeeByCreds(userName, password);
            if (employee != null)
            {
                var tokenString = _tokenService.CreateToken(employee);
                response = Ok(new
                {
                    token = tokenString,
                    employee = employee
                });

            }
            return response;
        }
    }
}
