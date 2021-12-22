//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.Extensions.Configuration;
//using Microsoft.Data;
//using Microsoft.Data.SqlClient;
//using RetailAPI.DataAccess.DataAccess;
//using RetailAPI.DataAccess.Models;
//using Microsoft.EntityFrameworkCore;

//namespace RetailerAPI.Controllers
//{

//    [Route("api/[controller]")]
//    //[Route("[controller]/[action]")]
//    [ApiController]
//    public class AssessmentController : ControllerBase
//    {
//        //Bring in the configurtion file
//        private readonly IConfiguration _config;
//        private readonly ProjectDbContext _context;
//        //Overload constructor with configuration
//        public AssessmentController(IConfiguration config,ProjectDbContext context)
//        {
//            _config = config;
//            _context = context;
//        }
//        //Create Http methods aka action methods

//        /*
//         * This method will get all assessment records
//         * Route api/Assessment/GetAllAssessments
//         */
        
//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<Assessment>>> Get()
//        {
//            return await _context.Assessments.ToListAsync();
//        }

//        //Get existing Assesment by ID
//        [HttpGet("{id}")]
//        public async Task<ActionResult<Assessment>> AssessmentByID(int id)
//        {
//            var assessment = await _context.Assessments.FindAsync(id);

//            if (assessment == null)
//            {
//                return NotFound();
//            }

//            return assessment;
//        }
//        //Add new Assessment
//        [HttpPost]
//        public async Task<ActionResult<Assessment>>AddAssessment(Assessment assessment)
//        {
//            _context.Assessments.Add(assessment);
//            await _context.SaveChangesAsync();

//            return CreatedAtAction("GetAssessmentById", new { id = assessment.AssessmentID }, assessment);

//        }

//        //UPDATE
//        // PUT: api/Assessment/UpdateAssessment
//        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
//        // more details see https://aka.ms/RazorPagesCRUD.
//        [HttpPut("{id}")]
//        public async Task<IActionResult> UpdateAssessment(int id, Assessment assessment)
//        {
//            assessment.AssessmentID = id;

//            _context.Entry(assessment).State = EntityState.Modified;

//            try
//            {
//                await _context.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (AssessmentExists(id))
//                {
//                    return NotFound();
//                }
//                else
//                {
//                    throw;
//                }
//            }

//            return NoContent();
//        }

//        //Check for existance
//        private bool AssessmentExists(int id)
//        {
//            return _context.Assessments.Any(e => e.AssessmentID == id);
//        }

//        //DELETE
//        // DELETE: api/DCandidates/5
//        [HttpDelete("{id}")]
//        public async Task<ActionResult<Assessment>> DeleteAssessment(int id)
//        {
//            var assessment = await _context.Assessments.FindAsync(id);
//            if (assessment == null)
//            {
//                return NotFound();
//            }

//            _context.Assessments.Remove(assessment);
//            await _context.SaveChangesAsync();

//            return assessment;
//        }




//    }
//}
