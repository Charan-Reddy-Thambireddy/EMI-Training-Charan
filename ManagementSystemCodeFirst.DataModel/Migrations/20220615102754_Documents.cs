using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ManagementSystemCodeFirst.DataModel.Migrations
{
    public partial class Documents : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "documents",
                columns: table => new
                {
                    DocId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DocName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Doc = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    DocSize = table.Column<int>(type: "int", nullable: false),
                    RequestId = table.Column<int>(type: "int", nullable: false),
                    UploadedBy = table.Column<int>(type: "int", nullable: false),
                    UploadedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedBy = table.Column<int>(type: "int", nullable: false),
                    UpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_documents", x => x.DocId);
                    table.ForeignKey(
                        name: "FK_documents_employees_UpdatedBy",
                        column: x => x.UpdatedBy,
                        principalTable: "employees",
                        principalColumn: "EmployeeId",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_documents_employees_UploadedBy",
                        column: x => x.UploadedBy,
                        principalTable: "employees",
                        principalColumn: "EmployeeId",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_documents_requests_RequestId",
                        column: x => x.RequestId,
                        principalTable: "requests",
                        principalColumn: "RequestId",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_documents_RequestId",
                table: "documents",
                column: "RequestId");

            migrationBuilder.CreateIndex(
                name: "IX_documents_UpdatedBy",
                table: "documents",
                column: "UpdatedBy");

            migrationBuilder.CreateIndex(
                name: "IX_documents_UploadedBy",
                table: "documents",
                column: "UploadedBy");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "documents");
        }
    }
}
