using ManagementSystem.DataModel.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ManagementSystemAPI.Services.Interface
{
    public interface IRequestService
    {
        Task<List<Request>> GetAllRequests();
        Task<List<Request>> GetAllRequestOfRaisedBy(int raisedById);
        Task<List<Request>> GetAllRequestOfRaisedTo(int raisedToId);
        Task<int> AddRequest(Request request);
        Task<int> UpdateRequest(Request request);
        Task<Request> GetRequest(int id);
        Task<String> DeleteRequest(int id);

        Task<int> UpdateRequestStatus(int requestId, int status);
    }
}
