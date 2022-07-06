using ManagementSystem.DataModel.DTO;
using ManagementSystem.DataModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystem.DataModel.Repository.Interface
{
    public interface IUserRepository
    {
        public User GetEmployeeByCreds(string userName, string password);

    }
}
