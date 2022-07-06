using ManagementSystem.DataModel.DTO;
using ManagementSystem.DataModel.Repository.Interface;
using ManagementSystemAPI.Services.Interface;
using System.Threading.Tasks;

namespace ManagementSystemAPI.Services
{
    public class FileUploadService: IFileUploadService
    {
        private readonly IFileUploadRepository _fileRepository;

        public FileUploadService(IFileUploadRepository repository)
        {
            _fileRepository = repository;
        }


        public async Task UploadFileAsync(FileModel fileModel)
        {
            await _fileRepository.UploadFileAsync(fileModel);
        }
    }
}
