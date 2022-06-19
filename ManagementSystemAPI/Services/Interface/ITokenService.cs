using ManagementSystem.DataModel.Entities;

namespace ManagementSystemAPI.Services.Interface
{
    public interface ITokenService
    {
        public string CreateToken(Employee employee);
    }
}
