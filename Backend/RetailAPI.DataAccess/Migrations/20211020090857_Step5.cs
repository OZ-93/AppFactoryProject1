using Microsoft.EntityFrameworkCore.Migrations;

namespace RetailAPI.DataAccess.Migrations
{
    public partial class Step5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ResultDetailDetailID",
                table: "AssessmentBookings",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AssessmentBookings_ResultDetailDetailID",
                table: "AssessmentBookings",
                column: "ResultDetailDetailID");

            migrationBuilder.AddForeignKey(
                name: "FK_AssessmentBookings_AssessmentBookingDetails_ResultDetailDetailID",
                table: "AssessmentBookings",
                column: "ResultDetailDetailID",
                principalTable: "AssessmentBookingDetails",
                principalColumn: "DetailID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AssessmentBookings_AssessmentBookingDetails_ResultDetailDetailID",
                table: "AssessmentBookings");

            migrationBuilder.DropIndex(
                name: "IX_AssessmentBookings_ResultDetailDetailID",
                table: "AssessmentBookings");

            migrationBuilder.DropColumn(
                name: "ResultDetailDetailID",
                table: "AssessmentBookings");
        }
    }
}
