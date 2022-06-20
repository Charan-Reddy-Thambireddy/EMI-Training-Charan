using ManagementSystem.DataModel.DTO;
using ManagementSystem.DataModel.Entities;

namespace ManagementSystemAPI.Services.Interface
{
    public interface ITokenService
    {
        public string CreateToken(User user);
    }
}
