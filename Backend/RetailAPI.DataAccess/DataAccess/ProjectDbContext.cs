﻿using Microsoft.EntityFrameworkCore;
using RetailAPI.DataAccess.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace RetailAPI.DataAccess.DataAccess
{
    public class ProjectDbContext: IdentityDbContext<User>
    {
        //Create constructor
        public ProjectDbContext(DbContextOptions<ProjectDbContext> options) : base(options) { }

       /* protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Seed();
        }*/

        //Map the tables
        public DbSet<Assessment> Assessments { get; set; }
        public DbSet<AssessmentBooking> AssessmentBookings { get; set; }
        public DbSet<Candidate> Candidates { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserType> UserTypes { get; set; }
        
        public DbSet<AssessmentBookingDetail> AssessmentBookingDetails { get; set; }

    }
}
