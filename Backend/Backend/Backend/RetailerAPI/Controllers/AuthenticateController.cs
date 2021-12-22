using Microsoft.AspNetCore.Mvc;  
using Microsoft.Extensions.Configuration;  
using RetailAPI.DataAccess.Models;  
using Microsoft.AspNetCore.Http;   
using Microsoft.IdentityModel.Tokens;  
using System;  
using System.Collections.Generic; 
using System.IdentityModel.Tokens;  
using System.Security.Claims;  
using System.Linq;  
using System.Threading.Tasks;  
using System.IdentityModel.Tokens.Jwt;  
using System.Text;  
using Microsoft.AspNetCore.Identity;  
using Microsoft.IdentityModel.JsonWebTokens;  
using RetailAPI.DataAccess.DataAccess; 
using Microsoft.EntityFrameworkCore; 
using Microsoft.Extensions.Logging;  

namespace RetailerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly UserManager<User> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;
        private readonly ProjectDbContext _context;
        private readonly SignInManager<User> _signInManager;
        private readonly ILogger<LoginModel>_logger;
        private readonly JwtService _jwtService;
        //internal DbSet<User> _dbSet;
        
        public AuthenticateController(UserManager<User> userManager,
            RoleManager<IdentityRole> roleManager, 
            IConfiguration configuration,
            ProjectDbContext context,
            SignInManager<User> signInManager,
            ILogger<LoginModel>logger,
            JwtService jwtService)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
            _context = context;
            _signInManager = signInManager;
            _logger = logger;
            _jwtService = jwtService;
        }


        
        public User GetUserById(string id)
        {
            User vm = new User();

            //return _dbSet.Find(id);
            //return _context.Users.Find(id);
            return _context.Users.FirstOrDefault(Users => Users.Id == id);
            
        }


        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var user = await userManager.FindByNameAsync(model.Email);
            if (user != null && await userManager.CheckPasswordAsync(user, model.Password))
            {
                var userRoles = await userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.Email),
                    new Claim(Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(3),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );


                var jwt = _jwtService.Generate(user.Id);

                //string jwt = new JwtSecurityTokenHandler().WriteToken(token);
                   

                Response.Cookies.Append("JWT", jwt, new CookieOptions
                {
                    HttpOnly = true
                });

               
                return Ok(new
                {
                    Message = "Success",
                });

                //used to return these before we create cookies
                /* return Ok(new
                 {
                     token = new JwtSecurityTokenHandler().WriteToken(token),
                     expiration = token.ValidTo
                 });*/
            }
            return Unauthorized();
        }


        [HttpGet("user")]
        public IActionResult User()
        {
            try
            {
                var jwt = Request.Cookies["jwt"];
                var token = _jwtService.Verify(jwt);
                //int userId = int.Parse(token.Issuer);
                string userId = token.Issuer;
                var user = GetUserById(userId);

                return Ok(user);
            }
            catch (Exception)
            {
                return Unauthorized();
            }
        }



        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("JWT");

            return Ok(new
            {
                Message = "Successfully Logout"
            });
        }


         
        //Register Client
        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] ClientUser model)
        {
            var userExists = await userManager.FindByNameAsync(model.Email);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            ClientUser user = new ClientUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                FirstName = model.FirstName,
                LastName = model.LastName,
                PhoneNumber = model.PhoneNumber,
                Password = model.Password,
                //PasswordHash = model.Password,
                UserType = 1,
                RetailerName = model.RetailerName,
                UserName = model.Email,
                NormalizedEmail = model.Email.ToUpper(),
                NormalizedUserName = model.Email.ToUpper()

        };

            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                _context.ClientUsers.Add(user);
                _context.SaveChanges();
                return Ok(new Response { Status = "Success", Message = "User created successfully!" });
                
            }

            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }

        [HttpPost]
        [Route("register/admin")]

        public async Task<IActionResult> RegisterAdmin([FromBody] AdminUser model)
        {

            var userExists = await userManager.FindByNameAsync(model.Email);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            AdminUser user = new AdminUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                FirstName = model.FirstName,
                LastName = model.LastName,
                PhoneNumber = model.PhoneNumber,
                Password = model.Password,
                //PasswordHash = model.Password,
                UserType = 2,

                UserName = model.Email,
                NormalizedEmail = model.Email.ToUpper(),
                NormalizedUserName = model.Email.ToUpper()

            
            };


            if (!await roleManager.RoleExistsAsync(UserRoles.Admin))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));


            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                _context.AdminUsers.Add(user);
                _context.SaveChanges();
                return Ok(new Response { Status = "Success", Message = "User created successfully!" });

            }
          
            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }


            //    
            //public IActionResult Index()
            //{
            //    return View();
            //}
        }
}
