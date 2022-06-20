using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystem.DataModel.DTO
{
    public class EmployeeDetails
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string DesignationName { get; set; }
        public DateTime? DateOfJoining { get; set; }
        public string ContactNo { get; set; }
        public string EmailId { get; set; }
    }
}
