using ManagementSystem.DataModel.Entities;
using ManagementSystem.DataModel.Repository.Interface;
using ManagementSystemAPI.Services.Interface;
using System.Collections.Generic;

namespace ManagementSystemAPI.Services
{
    public class RequestService : IRequestService
    {
        private readonly IRequestRepository _IRequestRepository;

        public RequestService(IRequestRepository IRequestRepository)
        {
            _IRequestRepository = IRequestRepository;
        }

        public int AddRequest(Request request)
        {
            return _IRequestRepository.AddRequest(request);
        }

        public string DeleteRequest(int id)
        {
            return _IRequestRepository.DeleteRequest(id);
        }

        public List<Request> GetAllRequestOfRaisedBy(int raisedById)
        {
            return _IRequestRepository.GetAllRequestOfRaisedBy(raisedById);
        }

        public List<Request> GetAllRequestOfRaisedTo(int raisedToId)
        {
            return _IRequestRepository.GetAllRequestOfRaisedTo(raisedToId);
        }

        public List<Request> GetAllRequests()
        {
            return _IRequestRepository.GetAllRequests();
        }

        public Request GetRequest(int id)
        {
            return _IRequestRepository.GetRequest(id);
        }

        public int UpdateRequest(Request request)
        {
            return _IRequestRepository.UpdateRequest(request);
        }
    }
}
