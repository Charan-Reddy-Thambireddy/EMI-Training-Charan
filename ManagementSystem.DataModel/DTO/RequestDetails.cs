using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystem.DataModel.DTO
{
    public class RequestDetails
    {
        public int RequestId { get; set; }
        public string Purpose { get; set; }
        public string Description { get; set; }
        public decimal? EstimatedCost { get; set; }
        public decimal? SpentAmount { get; set; }
        public decimal? AdvanceAmount { get; set; }
        public int? RaisedBy { get; set; }
        public string RaisedByName { get; set; }
        public string Comments { get; set; }
        public int? RaisedTo { get; set; }
        public string RaisedToName { get; set; }
        public DateTime? RaisedOn { get; set; }
        public DateTime? AccpetOrRejectedOn { get; set; }
        public int? EscaltionRefReqId { get; set; }
        public DateTime? EscalatedOn { get; set; }
        public int? Status { get; set; }
        public int? UpdatedBy { get; set; }
        public string UpdatedByName { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public DateTime? PlannedDate { get; set; }
    }
}
