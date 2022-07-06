using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystem.DataModel.DTO
{
    public class User
    {
        public int? EmployeeId { get; set; }
        public int? DesignationId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string EmployeeName { get; set; }    
        public string EmailId { get; set; } 
        public int? ManagerId { get; set; }
        public string ManagerName { get; set; }
    }
}
