using System;
using System.Collections.Generic;

#nullable disable

namespace ManagementSystem.DataModel.Entities
{
    public partial class Request
    {
        public Request()
        {
            DocumentsUploadeds = new HashSet<DocumentsUploaded>();
            InverseEscaltionRefReq = new HashSet<Request>();
        }

        public int RequestId { get; set; }
        public string Purpose { get; set; }
        public string Description { get; set; }
        public decimal? EstimatedCost { get; set; }
        public decimal? SpentAmount { get; set; }
        public decimal? AdvanceAmount { get; set; }
        public int? RaisedBy { get; set; }
        public int? RaisedTo { get; set; }
        public DateTime? RaisedOn { get; set; }
        public string Comments { get; set; }
        public DateTime? AccpetOrRejectedOn { get; set; }
        public int? EscaltionRefReqId { get; set; }
        public DateTime? EscalatedOn { get; set; }
        public int? Status { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public DateTime? PlannedDate { get; set; }

        public virtual Request EscaltionRefReq { get; set; }
        public virtual Employee RaisedByNavigation { get; set; }
        public virtual Employee RaisedToNavigation { get; set; }
        public virtual Status StatusNavigation { get; set; }
        public virtual Employee UpdatedByNavigation { get; set; }
        public virtual ICollection<DocumentsUploaded> DocumentsUploadeds { get; set; }
        public virtual ICollection<Request> InverseEscaltionRefReq { get; set; }
    }
}
