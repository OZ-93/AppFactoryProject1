using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Data;
using Microsoft.Data.SqlClient;
using RetailAPI.DataAccess.DataAccess;
using RetailAPI.DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace RetailerAPI.Controllers
{
   
    [Route("api/[controller]")]
     [ApiController]
    public class AssessmentController : ControllerBase
    {
        //Bring in the configurtion file
        private readonly IConfiguration _config;
        private readonly ProjectDbContext _context;
        //Overload constructor with configuration
        public AssessmentController(IConfiguration config,ProjectDbContext context)
        {
            _config = config;
            _context = context;
        }
        //Create Http methods aka action methods

        /*
         * This method will get all assessment records
         * Route api/Assessment/GetAllAssessments
         */
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Assessment>>> Get()
        {
            return await _context.Assessments.ToListAsync();
        }

        //Add new Assessment
        [HttpPost]
        public async Task<ActionResult<Assessment>>AddAssessment(Assessment assessment)
        {
            _context.Assessments.Add(assessment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAssessment", new { id = assessment.AssessmentID }, assessment);

        }
        //Get existing Assesment
        


    }
}
