using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace ManagementSystem.DataModel.Entities
{
    public partial class Status
    {
        public Status()
        {
            Requests = new HashSet<Request>();
        }

        public int StatusId { get; set; }
        public string StatusName { get; set; }
        [JsonIgnore]
        public virtual ICollection<Request> Requests { get; set; }
    }
}
