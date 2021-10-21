using Microsoft.EntityFrameworkCore.Migrations;

namespace RetailAPI.DataAccess.Migrations
{
    public partial class Step6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BookingStatus",
                table: "AssessmentBookings",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BookingStatus",
                table: "AssessmentBookings");
        }
    }
}
