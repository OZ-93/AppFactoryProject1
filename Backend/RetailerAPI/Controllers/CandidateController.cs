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
    public class CandidateController : ControllerBase
    {
        //Bring in the configurtion file
        private readonly IConfiguration _config;
        private readonly ProjectDbContext _context;
        //Overload constructor with configuration
        public CandidateController(IConfiguration config, ProjectDbContext context)
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
        public async Task<ActionResult<IEnumerable<Candidate>>> Get()
        {
            return await _context.Candidates.ToListAsync();
        }

        //Get existing Assesment by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Candidate>> CandidateByID(int id)
        {
            var Candidate = await _context.Candidates.FindAsync(id);

            if (Candidate == null)
            {
                return NotFound();
            }

            return Candidate;
        }
        //Add new Candidate
        [HttpPost]
        public async Task<ActionResult<Candidate>> AddCandidate(Candidate Candidate)
        {
            _context.Candidates.Add(Candidate);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCandidateById", new { id = Candidate.CandidateID }, Candidate);

        }

        //UPDATE
        // PUT: api/Assessment/UpdateAssessment
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCandidate(int id, Candidate Candidate)
        {
            Candidate.CandidateID = id;

            _context.Entry(Candidate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (CandidateExists(id))
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

        private bool CandidateExists(int id)
        {
            throw new NotImplementedException();
        }

        //Check for existance
        private bool CandidateExist(int id)
        {
            return _context.Candidates.Any(e => e.CandidateID == id);
        }

        //DELETE
        // DELETE: api/DCandidates/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Candidate>> DeleteCandidate(int id)
        {
            var Candidate = await _context.Candidates.FindAsync(id);
            if (Candidate == null)
            {
                return NotFound();
            }

            _context.Candidates.Remove(Candidate);
            await _context.SaveChangesAsync();

            return Candidate;

        }

        }
    }
