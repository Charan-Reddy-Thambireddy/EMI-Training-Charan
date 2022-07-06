using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystem.DataModel.DTO
{
    public class FileModel
    {
        public IFormFile MyFile { get; set; }
        public int RequestId { get; set; }
        public int EmployeeId { get; set; }
    }
}
