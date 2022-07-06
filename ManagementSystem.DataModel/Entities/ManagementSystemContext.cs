using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ManagementSystem.DataModel.Entities
{
    public partial class ManagementSystemContext : DbContext
    {
        public ManagementSystemContext()
        {
        }

        public ManagementSystemContext(DbContextOptions<ManagementSystemContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Document> Documents { get; set; }
        public virtual DbSet<DocumentsUploaded> DocumentsUploadeds { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Login> Logins { get; set; }
        public virtual DbSet<Request> Requests { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Status> Statuses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=INDBANL093;Database=ManagementSystem;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Document>(entity =>
            {
                entity.HasKey(e => e.DocId)
                    .HasName("PK__Document__3EF188AD96986213");

                entity.Property(e => e.FileExtension).HasMaxLength(255);

                entity.Property(e => e.MimeType).HasMaxLength(255);

                entity.Property(e => e.UpdatedOn).HasColumnType("datetime");

                entity.Property(e => e.UploadedOn).HasColumnType("datetime");

                entity.HasOne(d => d.Request)
                    .WithMany(p => p.Documents)
                    .HasForeignKey(d => d.RequestId)
                    .HasConstraintName("FK__Documents__Reque__49C3F6B7");

                entity.HasOne(d => d.UpdatedByNavigation)
                    .WithMany(p => p.DocumentUpdatedByNavigations)
                    .HasForeignKey(d => d.UpdatedBy)
                    .HasConstraintName("FK__Documents__Updat__4AB81AF0");

                entity.HasOne(d => d.UploadedByNavigation)
                    .WithMany(p => p.DocumentUploadedByNavigations)
                    .HasForeignKey(d => d.UploadedBy)
                    .HasConstraintName("FK__Documents__Uploa__4BAC3F29");
            });

            modelBuilder.Entity<DocumentsUploaded>(entity =>
            {
                entity.HasKey(e => e.DocId)
                    .HasName("PK__Document__3EF188AD594E3582");

                entity.ToTable("DocumentsUploaded");

                entity.Property(e => e.DocName).HasMaxLength(255);

                entity.Property(e => e.FileExtension).HasMaxLength(25);

                entity.Property(e => e.FilePath).HasMaxLength(255);

                entity.Property(e => e.MimeType).HasMaxLength(25);

                entity.Property(e => e.UpdatedOn).HasColumnType("datetime");

                entity.Property(e => e.UploadedOn).HasColumnType("datetime");

                entity.HasOne(d => d.Request)
                    .WithMany(p => p.DocumentsUploadeds)
                    .HasForeignKey(d => d.RequestId)
                    .HasConstraintName("FK__Documents__Reque__33D4B598");

                entity.HasOne(d => d.UpdatedByNavigation)
                    .WithMany(p => p.DocumentsUploadedUpdatedByNavigations)
                    .HasForeignKey(d => d.UpdatedBy)
                    .HasConstraintName("FK__Documents__Updat__35BCFE0A");

                entity.HasOne(d => d.UploadedByNavigation)
                    .WithMany(p => p.DocumentsUploadedUploadedByNavigations)
                    .HasForeignKey(d => d.UploadedBy)
                    .HasConstraintName("FK__Documents__Uploa__34C8D9D1");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.ToTable("Employee");

                entity.HasIndex(e => e.EmailId, "UQ__Employee__7ED91ACE4C545BDF")
                    .IsUnique();

                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");

                entity.Property(e => e.Address).HasMaxLength(550);

                entity.Property(e => e.ContactNo).HasMaxLength(15);

                entity.Property(e => e.CreatedOn).HasColumnType("date");

                entity.Property(e => e.DateOfBirth).HasColumnType("date");

                entity.Property(e => e.DateOfJoining).HasColumnType("date");

                entity.Property(e => e.DesignationName).HasMaxLength(255);

                entity.Property(e => e.EmailId).HasMaxLength(255);

                entity.Property(e => e.EmployeeName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.UpdatedOn).HasColumnType("date");

                entity.HasOne(d => d.Designation)
                    .WithMany(p => p.Employees)
                    .HasForeignKey(d => d.DesignationId)
                    .HasConstraintName("FK__Employee__Design__29572725");

                entity.HasOne(d => d.Manager)
                    .WithMany(p => p.InverseManager)
                    .HasForeignKey(d => d.ManagerId)
                    .HasConstraintName("FK__Employee__Manage__2A4B4B5E");
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.ToTable("Login");

                entity.Property(e => e.Password).HasMaxLength(255);

                entity.Property(e => e.UserName).HasMaxLength(255);

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.Logins)
                    .HasForeignKey(d => d.EmployeeId)
                    .HasConstraintName("FK__Login__EmployeeI__38996AB5");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Logins)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK__Login__RoleId__398D8EEE");
            });

            modelBuilder.Entity<Request>(entity =>
            {
                entity.ToTable("Request");

                entity.Property(e => e.AccpetOrRejectedOn).HasColumnType("datetime");

                entity.Property(e => e.AdvanceAmount).HasColumnType("decimal(10, 2)");

                entity.Property(e => e.Comments).HasMaxLength(255);

                entity.Property(e => e.Description).HasMaxLength(500);

                entity.Property(e => e.EscalatedOn).HasColumnType("datetime");

                entity.Property(e => e.EstimatedCost).HasColumnType("decimal(10, 2)");

                entity.Property(e => e.PlannedDate).HasColumnType("datetime");

                entity.Property(e => e.Purpose).HasMaxLength(150);

                entity.Property(e => e.RaisedOn).HasColumnType("datetime");

                entity.Property(e => e.SpentAmount).HasColumnType("decimal(10, 2)");

                entity.Property(e => e.UpdatedOn).HasColumnType("datetime");

                entity.HasOne(d => d.EscaltionRefReq)
                    .WithMany(p => p.InverseEscaltionRefReq)
                    .HasForeignKey(d => d.EscaltionRefReqId)
                    .HasConstraintName("FK__Request__Escalti__2F10007B");

                entity.HasOne(d => d.RaisedByNavigation)
                    .WithMany(p => p.RequestRaisedByNavigations)
                    .HasForeignKey(d => d.RaisedBy)
                    .HasConstraintName("FK__Request__RaisedB__2D27B809");

                entity.HasOne(d => d.RaisedToNavigation)
                    .WithMany(p => p.RequestRaisedToNavigations)
                    .HasForeignKey(d => d.RaisedTo)
                    .HasConstraintName("FK__Request__RaisedT__2E1BDC42");

                entity.HasOne(d => d.StatusNavigation)
                    .WithMany(p => p.Requests)
                    .HasForeignKey(d => d.Status)
                    .HasConstraintName("FK__Request__Status__300424B4");

                entity.HasOne(d => d.UpdatedByNavigation)
                    .WithMany(p => p.RequestUpdatedByNavigations)
                    .HasForeignKey(d => d.UpdatedBy)
                    .HasConstraintName("FK__Request__Updated__30F848ED");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.Property(e => e.RoleId).HasColumnName("RoleID");

                entity.Property(e => e.RoleName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Status>(entity =>
            {
                entity.ToTable("Status");

                entity.Property(e => e.StatusId).HasColumnName("StatusID");

                entity.Property(e => e.StatusName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
