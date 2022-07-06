using System;
using System.Collections.Generic;

#nullable disable

namespace ManagementSystem.DataModel.Entities
{
    public partial class Employee
    {
        public Employee()
        {
            DocumentsUploadedUpdatedByNavigations = new HashSet<DocumentsUploaded>();
            DocumentsUploadedUploadedByNavigations = new HashSet<DocumentsUploaded>();
            InverseManager = new HashSet<Employee>();
            Logins = new HashSet<Login>();
            RequestRaisedByNavigations = new HashSet<Request>();
            RequestRaisedToNavigations = new HashSet<Request>();
            RequestUpdatedByNavigations = new HashSet<Request>();
        }

        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public int? DesignationId { get; set; }
        public string DesignationName { get; set; }
        public int? ManagerId { get; set; }
        public DateTime? DateOfJoining { get; set; }
        public string ContactNo { get; set; }
        public string EmailId { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string Address { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public int? UpdatedBy { get; set; }

        public virtual Role Designation { get; set; }
        public virtual Employee Manager { get; set; }
        public virtual ICollection<DocumentsUploaded> DocumentsUploadedUpdatedByNavigations { get; set; }
        public virtual ICollection<DocumentsUploaded> DocumentsUploadedUploadedByNavigations { get; set; }
        public virtual ICollection<Employee> InverseManager { get; set; }
        public virtual ICollection<Login> Logins { get; set; }
        public virtual ICollection<Request> RequestRaisedByNavigations { get; set; }
        public virtual ICollection<Request> RequestRaisedToNavigations { get; set; }
        public virtual ICollection<Request> RequestUpdatedByNavigations { get; set; }
    }
}
