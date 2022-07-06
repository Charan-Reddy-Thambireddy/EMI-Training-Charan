using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

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
        [JsonIgnore]
        public virtual ICollection<Employee> Employees { get; set; }
        [JsonIgnore]
        public virtual ICollection<Login> Logins { get; set; }
    }
}
