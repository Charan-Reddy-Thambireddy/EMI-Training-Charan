using ManagementSystem.DataModel.DTO;
using ManagementSystem.DataModel.Entities;
using ManagementSystem.DataModel.Repository.Interface;
using ManagementSystemAPI.Services.Interface;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ManagementSystemAPI.Services
{
    public class RequestService : IRequestService
    {
        private readonly IRequestRepository _IRequestRepository;
        private readonly MailService _MailService;

        public RequestService(IRequestRepository IRequestRepository, MailService MailService)
        {
            _IRequestRepository = IRequestRepository;
            _MailService = MailService; 
        }

        public async Task<int> AddRequest(Request request)
        {
            await _IRequestRepository.AddRequest(request);
            await _MailService.smtpMailer("", 1, request.RequestId);
            return 1;
        }

        public async Task<int> DeleteRequest(int id)
        {
            return await _IRequestRepository.DeleteRequest(id);
        }

        public async Task<List<RequestDetails>> GetAllRequestOfRaisedBy(int raisedById)
        {
            return await _IRequestRepository.GetAllRequestOfRaisedBy(raisedById);
        }

        public async Task<List<RequestDetails>> GetAllRequestOfRaisedTo(int raisedToId)
        {
            return await _IRequestRepository.GetAllRequestOfRaisedTo(raisedToId);
        }

        public async Task<List<Request>> GetAllRequests()
        {
            return await _IRequestRepository.GetAllRequests();
        }

        public async Task<Request> GetRequest(int id)
        {
            return await _IRequestRepository.GetRequest(id);
        }
        public async Task<RequestDetails> GetRequestWithId(int reqId)
        {
            return await _IRequestRepository.GetRequestWithId(reqId);
        }
        
        public async Task<int> UpdateRequest(Request request)
        {
            return await _IRequestRepository.UpdateRequest(request);
        }

        public async Task<int> UpdateRequestStatus(int requestId, int status, int employeeId, string comments)
        {
           
            await _IRequestRepository.UpdateRequestStatus(requestId,status, employeeId, comments);
            await _MailService.smtpMailer("", status, requestId);
            return 1;
        }

        public async Task<List<RequestDetails>> GetAllSortedRequestOfRaisedBy(int raisedById, int status)
        {
            return await _IRequestRepository.GetAllSortedRequestOfRaisedBy(raisedById, status);
        }

        public async Task<List<RequestDetails>> GetAllSortedRequestOfRaisedTo(int raisedToId, int status)
        {
            return await _IRequestRepository.GetAllSortedRequestOfRaisedTo(raisedToId, status);
        }
    }
}
