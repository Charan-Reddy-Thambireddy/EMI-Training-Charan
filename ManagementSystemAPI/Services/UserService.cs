using ManagementSystem.DataModel.DTO;
using ManagementSystem.DataModel.Entities;
using ManagementSystem.DataModel.Repository.Interface;
using ManagementSystemAPI.Services.Interface;

namespace ManagementSystemAPI.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userrepository)
        {
            _userRepository = userrepository;   
        }
        public User GetEmployeeByCreds(string userName, string password)
        {
            return _userRepository.GetEmployeeByCreds(userName, password); 
        }
    }
}
