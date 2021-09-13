using Microsoft.EntityFrameworkCore;
using RetailAPI.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RetailAPI.DataAccess.DataAccess
{
    public class ProjectDbContext:DbContext
    {
        //Create constructor
        public ProjectDbContext(DbContextOptions options) : base(options) { }

        //Map the tables
        public DbSet<Assessment> Assessments { get; set; }
        public DbSet<AssessmentBooking> AssessmentBookings { get; set; }
        public DbSet<Candidate> Candidates { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserType> UserTypes { get; set; }
        
        public DbSet<AssessmentBookingDetail> AssessmentBookingDetails { get; set; }

    }
}
