using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystemCodeFirst.DataModel.Models
{
    public class DocumentsUplaoded
    {
        [Key]
        public int DocId { get; set; }
        public string DocName { get; set; }
        public byte[] Doc { get; set; }
        public int DocSize { get; set; }
        public int RequestId { get; set; }
        public int UploadedBy { get; set; }
        public DateTime UploadedOn { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime UpdatedOn { get; set; }

        [ForeignKey("RequestId")]
        public virtual Request Request { get; set; }
        [ForeignKey("UpdatedBy")]
        public virtual Employee UpdatedByNavigation { get; set; }
        [ForeignKey("UploadedBy")]
        public virtual Employee UploadedByNavigation { get; set; }
    }
}
