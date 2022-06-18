using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ManagementSystemCodeFirst.DataModel.Migrations
{
    public partial class Reqttbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "requests",
                columns: table => new
                {
                    RequestId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Purpose = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EstimatedCost = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SpentAmount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    AdvanceAmount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    RaisedBy = table.Column<int>(type: "int", nullable: false),
                    RaisedTo = table.Column<int>(type: "int", nullable: false),
                    RaisedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Comments = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AccpetOrRejectedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EscaltionRefReqId = table.Column<int>(type: "int", nullable: false),
                    EscalatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false),
                    UpdatedBy = table.Column<int>(type: "int", nullable: false),
                    UpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_requests", x => x.RequestId);
                    table.ForeignKey(
                        name: "FK_requests_employees_RaisedBy",
                        column: x => x.RaisedBy,
                        principalTable: "employees",
                        principalColumn: "EmployeeId",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_requests_employees_RaisedTo",
                        column: x => x.RaisedTo,
                        principalTable: "employees",
                        principalColumn: "EmployeeId",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_requests_employees_UpdatedBy",
                        column: x => x.UpdatedBy,
                        principalTable: "employees",
                        principalColumn: "EmployeeId",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_requests_requests_EscaltionRefReqId",
                        column: x => x.EscaltionRefReqId,
                        principalTable: "requests",
                        principalColumn: "RequestId",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_requests_status_Status",
                        column: x => x.Status,
                        principalTable: "status",
                        principalColumn: "StatusId",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_requests_EscaltionRefReqId",
                table: "requests",
                column: "EscaltionRefReqId");

            migrationBuilder.CreateIndex(
                name: "IX_requests_RaisedBy",
                table: "requests",
                column: "RaisedBy");

            migrationBuilder.CreateIndex(
                name: "IX_requests_RaisedTo",
                table: "requests",
                column: "RaisedTo");

            migrationBuilder.CreateIndex(
                name: "IX_requests_Status",
                table: "requests",
                column: "Status");

            migrationBuilder.CreateIndex(
                name: "IX_requests_UpdatedBy",
                table: "requests",
                column: "UpdatedBy");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "requests");
        }
    }
}
