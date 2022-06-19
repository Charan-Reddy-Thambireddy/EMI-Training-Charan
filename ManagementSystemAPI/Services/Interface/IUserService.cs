using ManagementSystem.DataModel.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ManagementSystemAPI.Services.Interface
{
    public interface IUserService
    {
        public Employee  GetEmployeeByCreds(string userName, string password);
    }
}
