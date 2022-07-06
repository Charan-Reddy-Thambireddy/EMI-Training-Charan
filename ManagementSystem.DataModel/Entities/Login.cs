using System;
using System.Collections.Generic;

#nullable disable

namespace ManagementSystem.DataModel.Entities
{
    public partial class Login
    {
        public int Id { get; set; }
        public int? EmployeeId { get; set; }
        public int? RoleId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public int? IsActive { get; set; }

        public virtual Employee Employee { get; set; }
        public virtual Role Role { get; set; }
    }
}
