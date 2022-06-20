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

        public RequestService(IRequestRepository IRequestRepository)
        {
            _IRequestRepository = IRequestRepository;
        }

        public async Task<int> AddRequest(Request request)
        {
            return await _IRequestRepository.AddRequest(request);
        }

        public async Task<string> DeleteRequest(int id)
        {
            return await _IRequestRepository.DeleteRequest(id);
        }

        public async Task<List<Request>> GetAllRequestOfRaisedBy(int raisedById)
        {
            return await _IRequestRepository.GetAllRequestOfRaisedBy(raisedById);
        }

        public async Task<List<Request>> GetAllRequestOfRaisedTo(int raisedToId)
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

        public async Task<int> UpdateRequest(Request request)
        {
            return await _IRequestRepository.UpdateRequest(request);
        }

        public async Task<int> UpdateRequestStatus(int requestId, int status)
        {
           return await _IRequestRepository.UpdateRequestStatus(requestId,status);
        }
    }
}
