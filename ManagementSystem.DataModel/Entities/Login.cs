using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

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
        [JsonIgnore]
        public virtual Employee Employee { get; set; }
        [JsonIgnore]
        public virtual Role Role { get; set; }
    }
}
