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
    public class UserTypeController : ControllerBase
    {
        //Comment
        private readonly IConfiguration _config;
        private readonly ProjectDbContext _context;

        public UserTypeController(IConfiguration config, ProjectDbContext context)
        {
            _config = config;
            _context = context;
        }


        //This method will get all UserType records
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserType>>> Get()
        {
            return await _context.UserTypes.ToListAsync();
        }


        //This method will get UserType records using ID
        //[Route("api/GetUserTypes")]
        [HttpGet("{UserTypeId}")]
        public async Task<ActionResult<UserType>> GetUserType(int id)
        {
            var userType = await _context.UserTypes.FindAsync(id);
            // int x = 1;

            if (userType == null)
            {
                return NotFound();
            }

            return userType;
        }


        //This method will PUT or Update UserType records
        // [Route("api/UserType/PutUserTypes")]
        [HttpPut("{UserTypeID}")]
        public async Task<IActionResult> PutUserTypes(int id, UserType userType)
        {
            if (id != userType.UserTypeID)
            {
                return BadRequest();
            }

            _context.Entry(userType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                //if (userType == null)   not working
                if (!userTypeExists(id))
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


        //Add new UserType
        [HttpPost]
        public async Task<ActionResult<UserType>> AddUserType(UserType userTypes)
        {
            _context.UserTypes.Add(userTypes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserType", new { id = userTypes.UserTypeID }, userTypes);

        }


        //This method will DELETE UserType records
        //[Route("api/people/DeleteUserTypes")]
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserType>> DeleteUserType(int id)
        {
            var userType = await _context.UserTypes.FindAsync(id);

            if (userType == null)
            {
                return NotFound();
            }

            _context.UserTypes.Remove(userType);
            await _context.SaveChangesAsync();

            return userType;
        }

        private bool userTypeExists(int id)
        {
            return _context.UserTypes.Any(e => e.UserTypeID == id);
        }
    }
}
