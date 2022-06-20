using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ManagementSystem.DataModel.Entities;
using ManagementSystemAPI.Services.Interface;

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
        public async Task<Request> GetRequest(int id)
        {
            var request =  await _requestService.GetRequest(id);

            return request;
        }
        [HttpGet("raisedBy/{raisedById}")]
        public async Task<List<Request>> GetRequestOfRaisedBy(int raisedById)
        {
            var request = await _requestService.GetAllRequestOfRaisedBy(raisedById);

            return request;
        }
        [HttpGet("raisedTo/{raisedToId}")]
        public async Task<List<Request>> GetRequestOfRaisedTo(int raisedToId)
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

        [HttpPut("{requestId}/{status}")]
        public async Task<int> PutRequest(int requestId, int status)
        {
            return await _requestService.UpdateRequestStatus(requestId,status);
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
        public async Task<string> DeleteRequest(int id)
        {
            return await _requestService.DeleteRequest(id);
        }
    }
}
