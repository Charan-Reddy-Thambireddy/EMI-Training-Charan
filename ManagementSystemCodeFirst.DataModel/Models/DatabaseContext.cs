using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementSystemCodeFirst.DataModel.Models
{
    public class DatabaseContext:DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options): base(options)
        {

        }
        public DbSet<Role> roles { get; set; }
        public DbSet<Status> status { get; set; }
        public DbSet<Employee> employees { get; set; }  
        public DbSet<Request> requests { get; set; }
        public DbSet<DocumentsUplaoded> documents { get; set; }
        public DbSet<Login> login { get; set; }
        
        
    }
}
