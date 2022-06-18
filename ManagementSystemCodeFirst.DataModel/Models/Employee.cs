using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystemCodeFirst.DataModel.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public int DesignationId { get; set; }
        public string DesignationName { get; set; }
        public int? ManagerId { get; set; }
        public DateTime? DateOfJoining { get; set; }
        public int ContactNo { get; set; }
        public string EmailId { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Address { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public int UpdatedBy { get; set; }
        [ForeignKey("DesignationId")]
        public virtual Role Designation { get; set; }
        [ForeignKey("EmployeeId")]
        public virtual Employee Manager { get; set; }
    }
}
