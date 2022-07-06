using ManagementSystem.DataModel.DTO;
using ManagementSystem.DataModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystem.DataModel.Repository.Interface
{
    public interface IRequestRepository
    {
        Task<List<Request>> GetAllRequests();
        Task<List<RequestDetails>> GetAllRequestOfRaisedBy(int raisedById);
        Task<List<RequestDetails>> GetAllRequestOfRaisedTo(int raisedToId);
        Task<int> AddRequest(Request request);
        Task<int> UpdateRequest(Request request);
        Task<Request> GetRequest(int id);
        Task<int> DeleteRequest(int id);
        Task<RequestDetails> GetRequestWithId(int reqId);
        Task<int> UpdateRequestStatus(int requestId, int status, int employeeId);
        Task<List<RequestDetails>> GetAllSortedRequestOfRaisedBy(int raisedById, int status);
        Task<List<RequestDetails>> GetAllSortedRequestOfRaisedTo(int raisedToId, int status);
    }
}
