using ManagementSystem.DataModel.DTO;
using ManagementSystem.DataModel.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ManagementSystemAPI.Services.Interface
{
    public interface IRequestService
    {
        Task<List<Request>> GetAllRequests();
        Task<List<RequestDetails>> GetAllRequestOfRaisedBy(int raisedById);
        Task<List<RequestDetails>> GetAllRequestOfRaisedTo(int raisedToId);
        Task<int> AddRequest(Request request);
        Task<int> UpdateRequest(Request request);
        Task<Request> GetRequest(int id);
        Task<int> DeleteRequest(int id);
        Task<RequestDetails> GetRequestWithId(int reqId);
        Task<int> UpdateRequestStatus(int requestId, int status, int employeeId, string comments);
        Task<List<RequestDetails>> GetAllSortedRequestOfRaisedBy(int raisedById, int status);
        Task<List<RequestDetails>> GetAllSortedRequestOfRaisedTo(int raisedToId, int status);
    }
}
