using ManagementSystem.DataModel.DTO;
using ManagementSystem.DataModel.Entities;
using ManagementSystem.DataModel.Repository.Interface;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
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
        public IConfiguration Configuration { get; }

        private readonly IEmployeeRepository _IEmployeeRepository;

        public RequestRepository(ManagementSystemContext context, IConfiguration configuration, IEmployeeRepository IEmployeeRepository)
        {
            _context = context;
            Configuration = configuration;
            _IEmployeeRepository = IEmployeeRepository; 
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
        public async Task<int> AddEscRequest(Request request)
        {
            try
            {
                _context.Requests.Add(request);
                await _context.SaveChangesAsync();

                return request.RequestId;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<int> DeleteRequest(int id)
        {
            Request request = _context.Requests.Find(id);
            _context.Requests.Remove(request);
            await _context.SaveChangesAsync();
            return 1;
        }

        public async Task<List<RequestDetails>> GetAllRequestOfRaisedBy(int raisedById)
        {
            // return await _context.Requests.Where(x => x.RaisedBy == raisedById).ToListAsync();
            SqlConnection sqlCon = null;
            String SqlconString = Configuration.GetConnectionString("DefaultConnection");
            List< RequestDetails >requests = new List<RequestDetails>();
            using (sqlCon = new SqlConnection(SqlconString))
            {
                sqlCon.Open();
                SqlCommand Cmnd = new SqlCommand("  Select r.*,e.EmployeeName as 'RaisedByName',e1.EmployeeName as 'RaisedToName',e2.EmployeeName as 'UpdatedByName' from Request r inner join Employee e on r.RaisedBy=e.EmployeeID inner join Employee e1 on e1.EmployeeID=r.RaisedTo left join Employee e2 on e2.EmployeeID =r.updatedBy where r.RaisedBy=@ID", sqlCon);
                Cmnd.Parameters.AddWithValue("@ID", raisedById);
                SqlDataReader result = Cmnd.ExecuteReader();
                while (result.Read())
                {
                    RequestDetails request = new RequestDetails();
                    
                    request.RequestId = Convert.ToInt32(result["RequestId"]);
                    request.Purpose = result["Purpose"].ToString();
                    request.Description = result["Description"].ToString();
                    request.EstimatedCost = Convert.ToDecimal(result["EstimatedCost"]);
                    request.SpentAmount = Convert.ToDecimal(result["SpentAmount"]);
                    request.AdvanceAmount = Convert.ToDecimal(result["AdvanceAmount"]);
                    request.RaisedBy = Convert.ToInt32(result["RaisedBy"]);
                    request.RaisedByName = result["RaisedByName"].ToString();
                    request.Comments = result["Comments"].ToString();
                    request.RaisedTo = Convert.ToInt32(result["RaisedTo"]);
                    request.RaisedToName = result["RaisedToName"].ToString();
                    request.RaisedOn = Convert.IsDBNull(result["RaisedOn"]) ? null : (DateTime?)result["RaisedOn"];
                    request.AccpetOrRejectedOn = Convert.IsDBNull(result["AccpetOrRejectedOn"]) ? null : (DateTime?)result["AccpetOrRejectedOn"];
                    request.EscaltionRefReqId = Convert.IsDBNull(result["EscaltionRefReqId"]) ? null : Convert.ToInt32(result["EscaltionRefReqId"]);
                    request.EscalatedOn = Convert.IsDBNull(result["EscalatedOn"]) ? null : (DateTime?)result["EscalatedOn"]; 
                    request.Status = Convert.ToInt32(result["Status"]);
                    request.UpdatedBy = Convert.IsDBNull(result["UpdatedBy"]) ? null : Convert.ToInt32(result["UpdatedBy"]);
                    request.UpdatedByName = result["UpdatedByName"].ToString();
                    request.UpdatedOn = Convert.IsDBNull(result["UpdatedOn"]) ? null : (DateTime?)result["UpdatedOn"]; 
                    request.PlannedDate = Convert.IsDBNull(result["PlannedDate"]) ? null : (DateTime?)result["PlannedDate"]; 
                    requests.Add(request);
                }
                sqlCon.Close();
            }
            return requests;
        }

        public async Task<List<RequestDetails>> GetAllRequestOfRaisedTo(int raisedToId)
        {
            // return await _context.Requests.Where(x => x.RaisedTo == raisedToId).ToListAsync();
            SqlConnection sqlCon = null;
            String SqlconString = Configuration.GetConnectionString("DefaultConnection");
            List<RequestDetails> requests = new List<RequestDetails>();
            using (sqlCon = new SqlConnection(SqlconString))
            {
                sqlCon.Open();
                SqlCommand Cmnd = new SqlCommand("  Select r.*,e.EmployeeName as 'RaisedByName',e1.EmployeeName as 'RaisedToName',e2.EmployeeName as 'UpdatedByName' from Request r inner join Employee e on r.RaisedBy=e.EmployeeID inner join Employee e1 on e1.EmployeeID=r.RaisedTo left join Employee e2 on e2.EmployeeID =r.updatedBy where r.RaisedTo=@ID", sqlCon);
                Cmnd.Parameters.AddWithValue("@ID", raisedToId);
                SqlDataReader result = Cmnd.ExecuteReader();
                while (result.Read())
                {
                    RequestDetails request = new RequestDetails();

                    request.RequestId = Convert.ToInt32(result["RequestId"]);
                    request.Purpose = result["Purpose"].ToString();
                    request.Description = result["Description"].ToString();
                    request.EstimatedCost = Convert.ToDecimal(result["EstimatedCost"]);
                    request.SpentAmount = Convert.ToDecimal(result["SpentAmount"]);
                    request.AdvanceAmount = Convert.ToDecimal(result["AdvanceAmount"]);
                    request.RaisedBy = Convert.ToInt32(result["RaisedBy"]);
                    request.RaisedByName = result["RaisedByName"].ToString();
                    request.Comments = result["Comments"].ToString();
                    request.RaisedTo = Convert.ToInt32(result["RaisedTo"]);
                    request.RaisedToName = result["RaisedToName"].ToString();
                    request.RaisedOn = Convert.IsDBNull(result["RaisedOn"]) ? null : (DateTime?)result["RaisedOn"];
                    request.AccpetOrRejectedOn = Convert.IsDBNull(result["AccpetOrRejectedOn"]) ? null : (DateTime?)result["AccpetOrRejectedOn"];
                    request.EscaltionRefReqId = Convert.IsDBNull(result["EscaltionRefReqId"]) ? null : Convert.ToInt32(result["EscaltionRefReqId"]);
                    request.EscalatedOn = Convert.IsDBNull(result["EscalatedOn"]) ? null : (DateTime?)result["EscalatedOn"];
                    request.Status = Convert.ToInt32(result["Status"]);
                    request.UpdatedBy = Convert.IsDBNull(result["UpdatedBy"]) ? null : Convert.ToInt32(result["UpdatedBy"]);
                    request.UpdatedByName = result["UpdatedByName"].ToString();
                    request.UpdatedOn = Convert.IsDBNull(result["UpdatedOn"]) ? null : (DateTime?)result["UpdatedOn"];
                    request.PlannedDate = Convert.IsDBNull(result["PlannedDate"]) ? null : (DateTime?)result["PlannedDate"];
                    requests.Add(request);
                }
                sqlCon.Close();
            }
            return requests;
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
        public async Task<Request> GetEscRequest(int id)
        {
            return await _context.Requests.FirstOrDefaultAsync(x => x.EscaltionRefReqId == id);
        }
        public async Task<RequestDetails> GetRequestWithId(int reqId)
        {
            // return await _context.Requests.Where(x => x.RaisedTo == raisedToId).ToListAsync();
            SqlConnection sqlCon = null;
            String SqlconString = Configuration.GetConnectionString("DefaultConnection");
            RequestDetails request = new RequestDetails();
            using (sqlCon = new SqlConnection(SqlconString))
            {
                sqlCon.Open();
                SqlCommand Cmnd = new SqlCommand("  Select r.*,e.EmployeeName as 'RaisedByName',e1.EmployeeName as 'RaisedToName',e2.EmployeeName as 'UpdatedByName' from Request r inner join Employee e on r.RaisedBy=e.EmployeeID inner join Employee e1 on e1.EmployeeID=r.RaisedTo left join Employee e2 on e2.EmployeeID =r.updatedBy where r.RequestId=@ID", sqlCon);
                Cmnd.Parameters.AddWithValue("@ID", reqId);
                SqlDataReader result = Cmnd.ExecuteReader();
                while (result.Read())
                {
                    

                    request.RequestId = Convert.ToInt32(result["RequestId"]);
                    request.Purpose = result["Purpose"].ToString();
                    request.Description = result["Description"].ToString();
                    request.EstimatedCost = Convert.ToDecimal(result["EstimatedCost"]);
                    request.SpentAmount = Convert.ToDecimal(result["SpentAmount"]);
                    request.AdvanceAmount = Convert.ToDecimal(result["AdvanceAmount"]);
                    request.RaisedBy = Convert.ToInt32(result["RaisedBy"]);
                    request.RaisedByName = result["RaisedByName"].ToString();
                    request.Comments = result["Comments"].ToString();
                    request.RaisedTo = Convert.ToInt32(result["RaisedTo"]);
                    request.RaisedToName = result["RaisedToName"].ToString();
                    request.RaisedOn = Convert.IsDBNull(result["RaisedOn"]) ? null : (DateTime?)result["RaisedOn"];
                    request.AccpetOrRejectedOn = Convert.IsDBNull(result["AccpetOrRejectedOn"]) ? null : (DateTime?)result["AccpetOrRejectedOn"];
                    request.EscaltionRefReqId = Convert.IsDBNull(result["EscaltionRefReqId"]) ? null : Convert.ToInt32(result["EscaltionRefReqId"]);
                    request.EscalatedOn = Convert.IsDBNull(result["EscalatedOn"]) ? null : (DateTime?)result["EscalatedOn"];
                    request.Status = Convert.ToInt32(result["Status"]);
                    request.UpdatedBy = Convert.IsDBNull(result["UpdatedBy"]) ? null : Convert.ToInt32(result["UpdatedBy"]);
                    request.UpdatedByName = result["UpdatedByName"].ToString();
                    request.UpdatedOn = Convert.IsDBNull(result["UpdatedOn"]) ? null : (DateTime?)result["UpdatedOn"];
                    request.PlannedDate = Convert.IsDBNull(result["PlannedDate"]) ? null : (DateTime?)result["PlannedDate"];
                }
                sqlCon.Close();
            }
            return request;
        }

        public async Task<int> UpdateRequest(Request request)
        {
            _context.Entry(request).State = EntityState.Modified;
            _context.SaveChangesAsync();
            return 1;
        }
        public async Task<int> UpdateRequestStatus(int requestId, int status, int employeeId)
        {
            Request request = await GetRequest(requestId);    
            if(status==4)
            {
                Employee manager = await _IEmployeeRepository.GetEmployeeById(employeeId);
                Request request1 = new Request();
                request1.Purpose =request.Purpose;
                request1.Description=request.Description;
                request1.EstimatedCost=request.EstimatedCost;
                request1.SpentAmount=request.SpentAmount;
                request1.AdvanceAmount=request.AdvanceAmount;
                request1.Comments=request.Comments;
                request1.AccpetOrRejectedOn=request.AccpetOrRejectedOn;
                request1.EscaltionRefReqId=request.EscaltionRefReqId;
                request1.EscalatedOn= request.EscalatedOn;
                request1.PlannedDate=request.PlannedDate;
                request1.Status = 5;
                request1.RaisedBy = employeeId;
                request1.RaisedOn= DateTime.Now; 
                request1.UpdatedBy = employeeId;
                request1.UpdatedOn = DateTime.Now;
                request1.RaisedTo = manager.ManagerId;
                int refId= await AddEscRequest(request1);
              
               request.EscaltionRefReqId = refId;
                request.EscalatedOn= DateTime.Now; 
                request.Status = status;
                request.UpdatedBy = employeeId;
                request.UpdatedOn = DateTime.Now;
                _context.Entry(request).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return 1;
            }
            else if(request.Status ==5)
            {
                request.Status = status;
                request.UpdatedBy = employeeId;
                request.UpdatedOn = DateTime.Now;
                _context.Entry(request).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                Request request2 = await GetEscRequest(requestId);
                request2.Status = status;
                request2.UpdatedBy = employeeId;
                request2.UpdatedOn = DateTime.Now;
                _context.Entry(request2).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return 1;
            }
            else
            {
                request.Status = status;
                request.UpdatedBy = employeeId;
                request.UpdatedOn = DateTime.Now;
                _context.Entry(request).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return 1;

            }
            
        }
        public async Task<List<RequestDetails>> GetAllSortedRequestOfRaisedBy(int raisedById, int status)
        {
            // return await _context.Requests.Where(x => x.RaisedBy == raisedById).ToListAsync();
            SqlConnection sqlCon = null;
            String SqlconString = Configuration.GetConnectionString("DefaultConnection");
            List<RequestDetails> requests = new List<RequestDetails>();
            using (sqlCon = new SqlConnection(SqlconString))
            {
                sqlCon.Open();
                SqlCommand Cmnd = new SqlCommand("  Select r.*,e.EmployeeName as 'RaisedByName',e1.EmployeeName as 'RaisedToName',e2.EmployeeName as 'UpdatedByName' from Request r inner join Employee e on r.RaisedBy=e.EmployeeID inner join Employee e1 on e1.EmployeeID=r.RaisedTo left join Employee e2 on e2.EmployeeID =r.updatedBy where r.RaisedBy=@ID and r.Status=@Status", sqlCon);
                Cmnd.Parameters.AddWithValue("@ID", raisedById);
                Cmnd.Parameters.AddWithValue("@Status", status);
                SqlDataReader result = Cmnd.ExecuteReader();
                while (result.Read())
                {
                    RequestDetails request = new RequestDetails();

                    request.RequestId = Convert.ToInt32(result["RequestId"]);
                    request.Purpose = result["Purpose"].ToString();
                    request.Description = result["Description"].ToString();
                    request.EstimatedCost = Convert.ToDecimal(result["EstimatedCost"]);
                    request.SpentAmount = Convert.ToDecimal(result["SpentAmount"]);
                    request.AdvanceAmount = Convert.ToDecimal(result["AdvanceAmount"]);
                    request.RaisedBy = Convert.ToInt32(result["RaisedBy"]);
                    request.RaisedByName = result["RaisedByName"].ToString();
                    request.Comments = result["Comments"].ToString();
                    request.RaisedTo = Convert.ToInt32(result["RaisedTo"]);
                    request.RaisedToName = result["RaisedToName"].ToString();
                    request.RaisedOn = Convert.IsDBNull(result["RaisedOn"]) ? null : (DateTime?)result["RaisedOn"];
                    request.AccpetOrRejectedOn = Convert.IsDBNull(result["AccpetOrRejectedOn"]) ? null : (DateTime?)result["AccpetOrRejectedOn"];
                    request.EscaltionRefReqId = Convert.IsDBNull(result["EscaltionRefReqId"]) ? null : Convert.ToInt32(result["EscaltionRefReqId"]);
                    request.EscalatedOn = Convert.IsDBNull(result["EscalatedOn"]) ? null : (DateTime?)result["EscalatedOn"];
                    request.Status = Convert.ToInt32(result["Status"]);
                    request.UpdatedBy = Convert.IsDBNull(result["UpdatedBy"]) ? null : Convert.ToInt32(result["UpdatedBy"]);
                    request.UpdatedByName = result["UpdatedByName"].ToString();
                    request.UpdatedOn = Convert.IsDBNull(result["UpdatedOn"]) ? null : (DateTime?)result["UpdatedOn"];
                    request.PlannedDate = Convert.IsDBNull(result["PlannedDate"]) ? null : (DateTime?)result["PlannedDate"];
                    requests.Add(request);
                }
                sqlCon.Close();
            }
            return requests;
        }

        public async Task<List<RequestDetails>> GetAllSortedRequestOfRaisedTo(int raisedToId, int status)
        {
            // return await _context.Requests.Where(x => x.RaisedTo == raisedToId).ToListAsync();
            SqlConnection sqlCon = null;
            String SqlconString = Configuration.GetConnectionString("DefaultConnection");
            List<RequestDetails> requests = new List<RequestDetails>();
            using (sqlCon = new SqlConnection(SqlconString))
            {
                sqlCon.Open();
                SqlCommand Cmnd = new SqlCommand("  Select r.*,e.EmployeeName as 'RaisedByName',e1.EmployeeName as 'RaisedToName',e2.EmployeeName as 'UpdatedByName' from Request r inner join Employee e on r.RaisedBy=e.EmployeeID inner join Employee e1 on e1.EmployeeID=r.RaisedTo left join Employee e2 on e2.EmployeeID =r.updatedBy where r.RaisedTo=@ID and r.Status=@Status", sqlCon);
                Cmnd.Parameters.AddWithValue("@ID", raisedToId);
                Cmnd.Parameters.AddWithValue("@Status", status);
                SqlDataReader result = Cmnd.ExecuteReader();
                while (result.Read())
                {
                    RequestDetails request = new RequestDetails();

                    request.RequestId = Convert.ToInt32(result["RequestId"]);
                    request.Purpose = result["Purpose"].ToString();
                    request.Description = result["Description"].ToString();
                    request.EstimatedCost = Convert.ToDecimal(result["EstimatedCost"]);
                    request.SpentAmount = Convert.ToDecimal(result["SpentAmount"]);
                    request.AdvanceAmount = Convert.ToDecimal(result["AdvanceAmount"]);
                    request.RaisedBy = Convert.ToInt32(result["RaisedBy"]);
                    request.RaisedByName = result["RaisedByName"].ToString();
                    request.Comments = result["Comments"].ToString();
                    request.RaisedTo = Convert.ToInt32(result["RaisedTo"]);
                    request.RaisedToName = result["RaisedToName"].ToString();
                    request.RaisedOn = Convert.IsDBNull(result["RaisedOn"]) ? null : (DateTime?)result["RaisedOn"];
                    request.AccpetOrRejectedOn = Convert.IsDBNull(result["AccpetOrRejectedOn"]) ? null : (DateTime?)result["AccpetOrRejectedOn"];
                    request.EscaltionRefReqId = Convert.IsDBNull(result["EscaltionRefReqId"]) ? null : Convert.ToInt32(result["EscaltionRefReqId"]);
                    request.EscalatedOn = Convert.IsDBNull(result["EscalatedOn"]) ? null : (DateTime?)result["EscalatedOn"];
                    request.Status = Convert.ToInt32(result["Status"]);
                    request.UpdatedBy = Convert.IsDBNull(result["UpdatedBy"]) ? null : Convert.ToInt32(result["UpdatedBy"]);
                    request.UpdatedByName = result["UpdatedByName"].ToString();
                    request.UpdatedOn = Convert.IsDBNull(result["UpdatedOn"]) ? null : (DateTime?)result["UpdatedOn"];
                    request.PlannedDate = Convert.IsDBNull(result["PlannedDate"]) ? null : (DateTime?)result["PlannedDate"];
                    requests.Add(request);
                }
                sqlCon.Close();
            }
            return requests;
        }
    }
}
