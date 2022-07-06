using ManagementSystem.DataModel.DTO;
using ManagementSystem.DataModel.Entities;
using ManagementSystem.DataModel.Repository.Interface;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystem.DataModel.Repository
{
    public class FileUploadRepository:IFileUploadRepository
    {
        private readonly string AppDirectory = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
        private static IEnumerable<List<FileRecord>> _fileDb;
        private readonly ManagementSystemContext _context;

        public FileUploadRepository(IEnumerable<List<FileRecord>> fileRecords, ManagementSystemContext context)
        {
            _fileDb = fileRecords;
            _context = context;
        }


        public async Task UploadFileAsync(FileModel fileModel)
        {
            try
            {
                FileRecord file = await SaveFileAsync(fileModel.MyFile);
                if (!string.IsNullOrEmpty(file.FilePath))
                {
                    file.AltText = fileModel.AltText;
                    file.Description = fileModel.Description;
                    file.RequestId = fileModel.RequestId;   
                    file.EmployeeId = fileModel.EmployeeId; 
                    SaveToDb(file);
                }
            }
            catch
            {
                throw;
            }
        }

        private void SaveToDb(FileRecord record)
        {
            try
            {
                if (record == null)
                    throw new ArgumentNullException($"{nameof(record)}");
                DocumentsUploaded fileData = new DocumentsUploaded();
                fileData.FilePath = record.FilePath;
                fileData.DocName = record.FileName;
                fileData.FileExtension = record.FileFormat;
                fileData.MimeType = record.ContentType;
                fileData.RequestId = record.RequestId;
                fileData.UploadedBy = record.EmployeeId;
                fileData.UploadedOn = DateTime.Now;
                _context.DocumentsUploadeds.Add(fileData);
                _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {

            }
        }

        private async Task<FileRecord> SaveFileAsync(IFormFile formFile)
        {
            FileRecord file = new FileRecord();
            if (formFile != null)
            {
                if (Directory.Exists(AppDirectory))
                    Directory.CreateDirectory(AppDirectory);

                var fileName = DateTime.Now.Ticks.ToString() + Path.GetExtension(formFile.FileName);
                var path = Path.Combine(AppDirectory, fileName);
                file.Id = _fileDb.Count() + 1;
                file.FilePath = path;
                file.FileName = fileName;
                file.FileFormat = Path.GetExtension(formFile.FileName);
                file.ContentType = formFile.ContentType;
                FileStream fs = new FileStream(path, FileMode.Create);
                await fs.CopyToAsync(fs);
            }

            return file;
        }
    }
}
