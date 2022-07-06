using ManagementSystem.DataModel.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystem.DataModel.Repository.Interface
{
    public interface IFileUploadRepository
    {
        public Task UploadFileAsync(FileModel fileModel);
    }
}
