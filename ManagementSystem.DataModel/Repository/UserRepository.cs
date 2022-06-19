using ManagementSystem.DataModel.Entities;
using ManagementSystem.DataModel.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystem.DataModel.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ManagementSystemContext _context;

        public UserRepository(ManagementSystemContext context)
        {
            _context = context;
        }
        public Employee GetEmployeeByCreds(string userName, string password)
        {
            Login creds = _context.Logins.FirstOrDefault(x => x.UserName == userName && x.Password == password);
            if (creds != null)
            {
                return _context.Employees.FirstOrDefault(x => x.EmployeeId == creds.EmployeeId);
            }
            else
            {
                return null;
            }
        }
    }
}
