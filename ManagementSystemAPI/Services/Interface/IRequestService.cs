using ManagementSystem.DataModel.Entities;
using System;
using System.Collections.Generic;

namespace ManagementSystemAPI.Services.Interface
{
    public interface IRequestService
    {
        List<Request> GetAllRequests();
        List<Request> GetAllRequestOfRaisedBy(int raisedById);
        List<Request> GetAllRequestOfRaisedTo(int raisedToId);
        int AddRequest(Request request);
        int UpdateRequest(Request request);
        Request GetRequest(int id);
        String DeleteRequest(int id);
    }
}
