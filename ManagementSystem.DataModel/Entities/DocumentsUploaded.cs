using System;
using System.Collections.Generic;

#nullable disable

namespace ManagementSystem.DataModel.Entities
{
    public partial class DocumentsUploaded
    {
        public int DocId { get; set; }
        public string DocName { get; set; }
        public byte[] Doc { get; set; }
        public int? DocSize { get; set; }
        public int? RequestId { get; set; }
        public int? UploadedBy { get; set; }
        public DateTime? UploadedOn { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public string MimeType { get; set; }
        public string FileExtension { get; set; }
        public string FilePath { get; set; }

        public virtual Request Request { get; set; }
        public virtual Employee UpdatedByNavigation { get; set; }
        public virtual Employee UploadedByNavigation { get; set; }
    }
}
