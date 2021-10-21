using Microsoft.EntityFrameworkCore.Migrations;

namespace RetailAPI.DataAccess.Migrations
{
    public partial class Step2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CandidateID",
                table: "AssessmentBookings",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AssessmentBookings_CandidateID",
                table: "AssessmentBookings",
                column: "CandidateID");

            migrationBuilder.AddForeignKey(
                name: "FK_AssessmentBookings_Candidates_CandidateID",
                table: "AssessmentBookings",
                column: "CandidateID",
                principalTable: "Candidates",
                principalColumn: "CandidateID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AssessmentBookings_Candidates_CandidateID",
                table: "AssessmentBookings");

            migrationBuilder.DropIndex(
                name: "IX_AssessmentBookings_CandidateID",
                table: "AssessmentBookings");

            migrationBuilder.DropColumn(
                name: "CandidateID",
                table: "AssessmentBookings");
        }
    }
}
