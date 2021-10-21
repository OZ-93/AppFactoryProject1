using Microsoft.EntityFrameworkCore.Migrations;

namespace RetailAPI.DataAccess.Migrations
{
    public partial class Step4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PaymentDetailDetailID",
                table: "AssessmentBookings",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AssessmentBookings_PaymentDetailDetailID",
                table: "AssessmentBookings",
                column: "PaymentDetailDetailID");

            migrationBuilder.AddForeignKey(
                name: "FK_AssessmentBookings_AssessmentBookingDetails_PaymentDetailDetailID",
                table: "AssessmentBookings",
                column: "PaymentDetailDetailID",
                principalTable: "AssessmentBookingDetails",
                principalColumn: "DetailID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AssessmentBookings_AssessmentBookingDetails_PaymentDetailDetailID",
                table: "AssessmentBookings");

            migrationBuilder.DropIndex(
                name: "IX_AssessmentBookings_PaymentDetailDetailID",
                table: "AssessmentBookings");

            migrationBuilder.DropColumn(
                name: "PaymentDetailDetailID",
                table: "AssessmentBookings");
        }
    }
}
