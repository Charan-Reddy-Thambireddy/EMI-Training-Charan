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
        public List<Request> GetRequests()
        {
            return _requestService.GetAllRequests().ToList();
        }

        // GET: api/Requests/5
        [HttpGet("{id}")]
        public Request GetRequest(int id)
        {
            var request =  _requestService.GetRequest(id);

            return request;
        }

        // PUT: api/Requests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public int PutRequest(int id, Request request)
        {         
            return _requestService.UpdateRequest(request);
        }

        // POST: api/Requests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public int PostRequest(Request request)
        {
            return _requestService.AddRequest(request);
        }

        // DELETE: api/Requests/5
        [HttpDelete("{id}")]
        public string DeleteRequest(int id)
        {
            return _requestService.DeleteRequest(id);
        }
    }
}
