using ManagementSystem.DataModel.DTO;
using ManagementSystem.DataModel.Entities;
using ManagementSystem.DataModel.Repository.Interface;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Protocols;
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
        public IConfiguration Configuration { get; }

        public UserRepository(ManagementSystemContext context, IConfiguration configuration)
        {
            _context = context;
            Configuration = configuration;
        }

        public User GetEmployeeByCreds(string userName, string password)
        {
            Login creds = _context.Logins.FirstOrDefault(x => x.UserName == userName && x.Password == password);
            User details = new User();
            if (creds != null)
            {
                // return _context.Employees.FirstOrDefault(x => x.EmployeeId == creds.EmployeeId);
                SqlConnection sqlCon = null;
                String SqlconString = Configuration.GetConnectionString("DefaultConnection");
                using (sqlCon = new SqlConnection(SqlconString))
                {
                    sqlCon.Open();
                    SqlCommand Cmnd = new SqlCommand("  Select e1.EmployeeId,e1.EmployeeName,e1.EmailId,e1.DesignationId,e1.ManagerId,e2.EmployeeName as ManagerName from employee e1 left join employee e2 on e1.ManagerId=e2.EmployeeID where e1.EmployeeID=@ID", sqlCon);
                    Cmnd.Parameters.AddWithValue("@ID", creds.EmployeeId);
                    SqlDataReader result = Cmnd.ExecuteReader();
                    
                    while (result.Read())
                    {
                        details.EmployeeId = Convert.ToInt32(result["EmployeeId"]);
                        details.EmployeeName = result["EmployeeName"].ToString();
                        details.EmailId = result["EmailId"].ToString();
                        details.UserName = userName;
                        details.Password = password;
                        details.ManagerId= Convert.ToInt32(result["ManagerId"]);
                        details.ManagerName = result["ManagerName"].ToString();
                        details.DesignationId = Convert.ToInt32(result["DesignationId"]);

                    }
                    sqlCon.Close();
                }
                return details;
            }
            else
            {
                return null;
            }
        }
    }
}
