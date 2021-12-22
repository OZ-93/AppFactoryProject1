using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using RetailAPI.DataAccess.DataAccess;
using RetailAPI.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace RetailerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssessmentBookingController : ControllerBase
    {

        //Build
        private readonly IConfiguration _config;
        private readonly ProjectDbContext _context;
        private IWebHostEnvironment _env;

        public AssessmentBookingController(IConfiguration config, ProjectDbContext context, IWebHostEnvironment env)
        {
            _config = config;
            _context = context;
            _env = env;
        }

        //GET === WORKS AND RETURNS STATUS 200 
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AssessmentBooking>>> Get()
        {
            return await _context.AssessmentBookings.ToListAsync();
        }
        //ADD
        [HttpPost]
        public async Task<ActionResult<AssessmentBooking>> AddAssessmentBooking(AssessmentBooking assessmentBooking)
        {
            _context.AssessmentBookings.Add(assessmentBooking);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetAssessmentBooking", new { id = assessmentBooking.BookingID }, assessmentBooking);
        }

        //THE ACTION "GetAssessmentBooking" 
        [HttpGet("{id}")]
        public async Task<ActionResult<AssessmentBooking>> GetAssessmentBooking(int id)
        {
            var assessmentBooking = await _context.AssessmentBookings.FindAsync(id);

            if (assessmentBooking == null)
            {
                return NotFound();
            }

            return assessmentBooking;
        }

        //Trying the put
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAssessmentBooking(int id, AssessmentBooking assessmentBooking)
        {
            assessmentBooking.BookingID = id;


            _context.Entry(assessmentBooking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                //if (userType == null)   not working
                if (assessmentBookingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            // return NoContent();
            return Ok();
        }
        //AssessmentExists method
        private bool assessmentBookingExists(int id)
        {
            return _context.AssessmentBookings.Any(e => e.BookingID == id);
        }
        //DELETE
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

        //Bring in the configurtion file
        //private readonly IConfiguration _config;
        //private readonly ProjectDbContext _context;
        //private IWebHostEnvironment _env;
        ////private readonly IHostingEnvironment _hostingEnvironment;
        ////Overload constructor with configuration
        //public AssessmentBookingController(IConfiguration config, ProjectDbContext context, IWebHostEnvironment env)
        //{
        //    _config = config;
        //    _context = context;
        //    _env = env;
        //    //_hostingEnvironment = hostingEnvironment;

        //}

        //Lets get first




        [Route("SaveFiles")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {

                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/UploadCV/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(physicalPath);
            }
            catch (Exception)
            {
                return new JsonResult("annonymous document");
            }

        }

        //public IActionResult DownloadFile(string filePath)
        //{
        //    //return PhysicalFile(filePath, MimeTypes.GetMimeType(filePath), Path.GetFileName(filePath));
        //    return PhysicalFile(filePath, Path.GetFileName(filePath));
        //}


        //this method does not recognize fileName

        //public FileResult downloadFile(string filePath)
        //{
        //    string fileName; 
        //    IFileProvider provider = new PhysicalFileProvider(filePath);
        //    IFileInfo fileInfo = provider.GetFileInfo(fileName);
        //    var readStream = fileInfo.CreateReadStream();
        //    var mineType = "application/pdf"

        //    return File(readStream, fileName);
        //}


        //[Route("getBookings")]
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<AssessmentBooking>>> Get()
        //{
        //    return await _context.AssessmentBookings.ToListAsync();
        //}


        //Get existing Assesment by ID
        //[Route("AssessmentBookingByID")]
        //[HttpGet("{id}")]
        //public async Task<ActionResult<AssessmentBooking>> AssessmentBookingByID(int id)
        //{
        //    var assessmentBooking = await _context.AssessmentBookings.FindAsync(id);

        //    if (assessmentBooking == null)
        //    {
        //        //return assessmentBooking;
        //        return NotFound();
        //    }

        //    return assessmentBooking;
        //}
        //Add new AssessmentBooking
        int count = 0;
        //[Route("AddAssessment")]
        //[HttpPost]

        //public async Task<ActionResult<AssessmentBooking>> AddAssessmentBooking(AssessmentBooking assessmentBooking)
        //{
        //    count++;
        //    //assessmentBooking.CandidateCV.Name = assessmentBooking.Candidate.FirstName + " " + assessmentBooking.Candidate.LastName;
        //    //assessmentBooking.CandidateCV.FilePath = UploadCV(assessmentBooking);

        //    //string variable to.....
        //    //string fileName = UploadCV(assessmentBooking);

        //    //CandidateCV cv = new CandidateCV()
        //    //{
        //    //    Name = count.ToString() + assessmentBooking.Candidate.FirstName + " " + assessmentBooking.Candidate.LastName,
        //    //    FilePath = fileName,


        //    //};
        //    //_context.candidateCVs.Add(cv);
        //    _context.AssessmentBookings.Add(assessmentBooking);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetAssessmentById", new { id = assessmentBooking.BookingID }, assessmentBooking);

        //}
        //Sample get to call the updateBooking
        //[Route("NewUpdate")]
        //[HttpGet("{id}")]
        //public IActionResult NewUpdate(int id)
        //{
        //    return RedirectToAction("updateBooking", "AssessmentBooking",id);
        //}

        //UPDATE
        // PUT: api/Assessment/UpdateAssessment
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        //[Route("updateBooking")]
        //[HttpPut("{id}")]
        //public async Task<IActionResult> UpdateAssessmentBooking(int id, AssessmentBooking assessmentBooking)
        //{
        //    assessmentBooking.BookingID = id;
        //    int x = 0;

        //    _context.Entry(assessmentBooking).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (AssessmentBookingExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //Check for existance
        //private bool AssessmentBookingExists(int id)
        //{
        //    return _context.AssessmentBookings.Any(e => e.BookingID == id);
        //}

        //DELETE
        // DELETE: api/DCandidates/5
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<AssessmentBooking>> DeleteAssessmentBooking(int id)
        //{
        //    var assessmentBooking = await _context.AssessmentBookings.FindAsync(id);
        //    if (assessmentBooking == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.AssessmentBookings.Remove(assessmentBooking);
        //    await _context.SaveChangesAsync();

        //    return assessmentBooking;
        //}
    }
}
