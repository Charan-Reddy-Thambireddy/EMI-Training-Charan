using ManagementSystem.DataModel.DTO;
using System.Threading.Tasks;

namespace ManagementSystemAPI.Services.Interface
{
    public interface IFileUploadService
    {
        public Task UploadFileAsync(FileModel fileModel);
    }
}
