using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetailAPI.DataAccess.Models;
using RetailerAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RetailerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
            private readonly IMailService mailService;

            public MailController(IMailService mailService)
            {
                this.mailService = mailService;
            }
            [HttpPost("send")]
            public async Task<IActionResult> SendMail([FromForm] MailRequest request)
            {
                try
                {
                    await mailService.SendEmailAsync(request);
                    return Ok();
                }
                catch (Exception ex)
                {
                    throw;
                }

            }
        }
    }

