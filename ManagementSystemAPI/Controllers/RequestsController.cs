using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ManagementSystem.DataModel.Entities;
using ManagementSystemAPI.Services.Interface;
using ManagementSystem.DataModel.DTO;

namespace ManagementSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestsController : ControllerBase
    {
        private readonly IRequestService _requestService;

        public RequestsController(IRequestService requestService)
        {
            _requestService = requestService;
        }

        // GET: api/Requests
        [HttpGet]
        public async Task<List<Request>> GetRequests()
        {
            return await _requestService.GetAllRequests();
        }

        // GET: api/Requests/5
        [HttpGet("{id}")]
        public async Task<RequestDetails> GetRequest(int id)
        {
            var request =  await _requestService.GetRequestWithId(id);

            return request;
        }
        
        [HttpGet("raisedBy/{raisedById}")]
        public async Task<List<RequestDetails>> GetRequestOfRaisedBy(int raisedById)
        {
            var requests = await _requestService.GetAllRequestOfRaisedBy(raisedById);

            return requests;
        }
        [HttpGet("raisedTo/{raisedToId}")]
        public async Task<List<RequestDetails>> GetRequestOfRaisedTo(int raisedToId)
        {
            var request = await _requestService.GetAllRequestOfRaisedTo(raisedToId);

            return request;
        }

        // PUT: api/Requests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<int> PutRequest(int id, Request request)
        {         
            return await _requestService.UpdateRequest(request);
        }

        [HttpPut("{requestId}/{status}/{employeeId}")]
        public async Task<int> PutRequest(int requestId, int status, int employeeId)
        {
            return await _requestService.UpdateRequestStatus(requestId,status, employeeId);
        }

        // POST: api/Requests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<int> PostRequest(Request request)
        {
            return await _requestService.AddRequest(request);
        }

        // DELETE: api/Requests/5
        [HttpDelete("{id}")]
        public async Task<int> DeleteRequest(int id)
        {
            return await _requestService.DeleteRequest(id);
        }

        [HttpGet("raisedBy/{raisedById}/{status}")]
        public async Task<List<RequestDetails>> GetSortedRequestOfRaisedBy(int raisedById, int status)
        {
            var requests = await _requestService.GetAllSortedRequestOfRaisedBy(raisedById, status);

            return requests;
        }
        [HttpGet("raisedTo/{raisedToId}/{status}")]
        public async Task<List<RequestDetails>> GetSortedRequestOfRaisedTo(int raisedToId, int status)
        {
             var request = await _requestService.GetAllSortedRequestOfRaisedTo(raisedToId,status);

             return request;
         }
    }
}
