using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystemCodeFirst.DataModel.Models
{
    public class Request
    {
        [Key]
        public int RequestId { get; set; }
        public string Purpose { get; set; }
        public string Description { get; set; }
        public decimal EstimatedCost { get; set; }
        public decimal SpentAmount { get; set; }
        public decimal AdvanceAmount { get; set; }
        public int RaisedBy { get; set; }
        public int RaisedTo { get; set; }
        public DateTime RaisedOn { get; set; }
        public string Comments { get; set; }
        public DateTime AccpetOrRejectedOn { get; set; }
        public int EscaltionRefReqId { get; set; }
        public DateTime EscalatedOn { get; set; }
        public int Status { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime UpdatedOn { get; set; }

        [ForeignKey("EscaltionRefReqId")]
        public virtual Request EscaltionRefReq { get; set; }
        [ForeignKey("RaisedBy")]
        public virtual Employee RaisedByNavigation { get; set; }
        [ForeignKey("RaisedTo")]
        public virtual Employee RaisedToNavigation { get; set; }
        [ForeignKey("Status")]
        public virtual Status StatusNavigation { get; set; }
        [ForeignKey("UpdatedBy")]
        public virtual Employee UpdatedByNavigation { get; set; }
    }
}
