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
        public async Task<int> AddRequest(Request request)
        {
            try
            {
                _context.Requests.Add(request);
                await _context.SaveChangesAsync();
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<string> DeleteRequest(int id)
        {
            Request request = _context.Requests.Find(id);
            _context.Requests.Remove(request);
            await _context.SaveChangesAsync();
            return "Removed " + request.Purpose + " Succesfully";
        }

        public async Task<List<Request>> GetAllRequestOfRaisedBy(int raisedById)
        {
            return await _context.Requests.Where(x => x.RaisedBy == raisedById).ToListAsync();
        }

        public async Task<List<Request>> GetAllRequestOfRaisedTo(int raisedToId)
        {
            return await _context.Requests.Where(x => x.RaisedTo == raisedToId).ToListAsync();
        }

        public async Task<List<Request>> GetAllRequests()
        {
            try
            {
                return await _context.Requests.ToListAsync();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<Request> GetRequest(int id)
        {
            return await _context.Requests.FirstOrDefaultAsync(x => x.RequestId == id);
        }

        public async Task<int> UpdateRequest(Request request)
        {
            _context.Entry(request).State = EntityState.Modified;
            _context.SaveChangesAsync();
            return 1;
        }
        public async Task<int> UpdateRequestStatus(int requestId, int status)
        {
            Request request = await GetRequest(requestId);    
            request.Status = status;
            _context.Entry(request).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return 1;
        }
    }
}
