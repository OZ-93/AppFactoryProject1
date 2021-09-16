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
    public class AssessmentBookingDetailController : ControllerBase
    {

        //Bring in the configurtion file
        private readonly IConfiguration _config;
        private readonly ProjectDbContext _context;
        //Overload constructor with configuration
        public AssessmentBookingDetailController(IConfiguration config, ProjectDbContext context)
        {
            _config = config;
            _context = context;
        }
        //Create Http methods aka action methods

        /*
         * This method will get all assessmentbooking details records
         * Route api/Assessment/GetAllAssessments
         */

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AssessmentBookingDetail>>> Get()
        {
            return await _context.AssessmentBookingDetails.ToListAsync();
        }

        //Get existing Assesmentbookingdetails by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<AssessmentBookingDetail>> AssessmentBookingDetailByID(int id)
        {
            var AssessmentBookingDetail = await _context.AssessmentBookingDetails.FindAsync(id);

            if (AssessmentBookingDetail == null)
            {
                return NotFound();
            }

            return AssessmentBookingDetail;
        }
        //Add new AssessmentBookingDetail
        [HttpPost]
        public async Task<ActionResult<AssessmentBookingDetail>> AddAssessmentBookingDetail(AssessmentBookingDetail assessmentBookingDetail)
        {
            _context.AssessmentBookingDetails.Add(assessmentBookingDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAssessmentById", new { id = assessmentBookingDetail.DetailID }, assessmentBookingDetail);

        }

        //UPDATE
        // PUT: api/Assessment/UpdateAssessmentDetail
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAssessmentBookingDetail(int id, AssessmentBookingDetail assessmentBookingDetail)
        {
            assessmentBookingDetail.DetailID = id;

            _context.Entry(assessmentBookingDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (AssessmentBookingDetailExists(id))
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
        private bool AssessmentBookingDetailExists(int id)
        {
            return _context.AssessmentBookingDetails.Any(e => e.DetailID == id);
        }

        //DELETE
        // DELETE: api/DCandidates/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AssessmentBookingDetail>> DeleteAssessmentBookingDetail(int id)
        {
            var assessmentBookingDetail = await _context.AssessmentBookingDetails.FindAsync(id);
            if (assessmentBookingDetail == null)
            {
                return NotFound();
            }

            _context.AssessmentBookingDetails.Remove(assessmentBookingDetail);
            await _context.SaveChangesAsync();

            return assessmentBookingDetail;
        }







    }
}
