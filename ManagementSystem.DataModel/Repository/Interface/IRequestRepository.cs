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
        List<Request> GetAllRequests();
        int  AddRequest(Request request);
        int UpdateRequest(Request request);
        Request GetRequest(int id);
        String DeleteRequest(int id);
    }
}
