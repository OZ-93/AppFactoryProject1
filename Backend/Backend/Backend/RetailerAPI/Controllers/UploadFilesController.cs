using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetailAPI.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace RetailerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadFilesController : ControllerBase
    {

        [HttpPost]
        public ActionResult Post([FromForm] UploadFile File)
        {
            try
            {
                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/CandidateCV", File.FileName);

                using (Stream stream = new FileStream(path, FileMode.Create))
                {
                    File.FormFile.CopyTo(stream);
                }

                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
