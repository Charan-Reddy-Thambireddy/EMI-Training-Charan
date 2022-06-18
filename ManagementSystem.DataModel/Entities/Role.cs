using System;
using System.Collections.Generic;

#nullable disable

namespace ManagementSystem.DataModel.Entities
{
    public partial class Role
    {
        public Role()
        {
            Employees = new HashSet<Employee>();
            Logins = new HashSet<Login>();
        }

        public int RoleId { get; set; }
        public string RoleName { get; set; }

        public virtual ICollection<Employee> Employees { get; set; }
        public virtual ICollection<Login> Logins { get; set; }
    }
}
