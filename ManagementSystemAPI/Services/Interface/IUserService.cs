using ManagementSystem.DataModel.DTO;
using ManagementSystem.DataModel.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ManagementSystemAPI.Services.Interface
{
    public interface IUserService
    {
        public User GetEmployeeByCreds(string userName, string password);
    }
}
