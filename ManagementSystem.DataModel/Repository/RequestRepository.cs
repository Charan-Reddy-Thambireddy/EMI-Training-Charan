using ManagementSystem.DataModel.Entities;
using ManagementSystem.DataModel.Repository.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystem.DataModel.Repository
{
    public class RequestRepository : IRequestRepository
    {
        private readonly ManagementSystemContext _context;

        public RequestRepository(ManagementSystemContext context)
        {
            _context = context;
        }
        public int AddRequest(Request request)
        {
            try
            {
                _context.Requests.Add(request);
                _context.SaveChanges();
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public string DeleteRequest(int id)
        {
            Request request = _context.Requests.Find(id);
            _context.Requests.Remove(request);
            _context.SaveChanges();
            return "Removed " + request.Purpose + " Succesfully";
        }

        public List<Request> GetAllRequestOfRaisedBy(int raisedById)
        {
            return _context.Requests.Where(x => x.RaisedBy == raisedById).ToList();
        }

        public List<Request> GetAllRequestOfRaisedTo(int raisedToId)
        {
            return _context.Requests.Where(x => x.RaisedTo == raisedToId).ToList();
        }

        public List<Request> GetAllRequests()
        {
            try
            {
                return _context.Requests.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Request GetRequest(int id)
        {
            return _context.Requests.FirstOrDefault(x => x.RequestId == id);
        }

        public int UpdateRequest(Request request)
        {
            _context.Entry(request).State = EntityState.Modified;
            _context.SaveChanges();
            return 1;
        }
    }
}
