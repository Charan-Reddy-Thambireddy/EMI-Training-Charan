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
        Task<List<Request>> GetAllRequestOfRaisedBy(int raisedById);
        Task<List<Request>> GetAllRequestOfRaisedTo(int raisedToId);
        Task<int> AddRequest(Request request);
        Task<int> UpdateRequest(Request request);
        Task<Request> GetRequest(int id);
        Task<String> DeleteRequest(int id);

        Task<int> UpdateRequestStatus(int requestId, int status);
    }
}
