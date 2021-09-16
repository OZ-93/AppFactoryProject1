using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using RetailAPI.DataAccess.DataAccess;
using RetailAPI.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RetailerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssessmentBookingController : ControllerBase
    {
        //Bring in the configurtion file
        private readonly IConfiguration _config;
        private readonly ProjectDbContext _context;
        //Overload constructor with configuration
        public AssessmentBookingController(IConfiguration config, ProjectDbContext context)
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
        public async Task<ActionResult<IEnumerable<AssessmentBooking>>> Get()
        {
            return await _context.AssessmentBookings.ToListAsync();
        }

        //Get existing Assesment by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<AssessmentBooking>> AssessmentBookingByID(int id)
        {
            var assessmentBooking = await _context.AssessmentBookings.FindAsync(id);

            if (assessmentBooking == null)
            {
                return NotFound();
            }

            return assessmentBooking;
        }
        //Add new AssessmentBooking
        [HttpPost]
        public async Task<ActionResult<AssessmentBooking>> AddAssessmentBooking(AssessmentBooking assessmentBooking)
        {
            _context.AssessmentBookings.Add(assessmentBooking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAssessmentById", new { id = assessmentBooking.BookingID }, assessmentBooking);

        }

        //UPDATE
        // PUT: api/Assessment/UpdateAssessment
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAssessmentBooking(int id, AssessmentBooking assessmentBooking)
        {
            assessmentBooking.BookingID = id;

            _context.Entry(assessmentBooking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (AssessmentBookingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        //Check for existance
        private bool AssessmentBookingExists(int id)
        {
            return _context.Assessments.Any(e => e.AssessmentID == id);
        }

        //DELETE
        // DELETE: api/DCandidates/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AssessmentBooking>> DeleteAssessmentBooking(int id)
        {
            var assessmentBooking = await _context.AssessmentBookings.FindAsync(id);
            if (assessmentBooking == null)
            {
                return NotFound();
            }

            _context.AssessmentBookings.Remove(assessmentBooking);
            await _context.SaveChangesAsync();

            return assessmentBooking;
        }
    }
}
