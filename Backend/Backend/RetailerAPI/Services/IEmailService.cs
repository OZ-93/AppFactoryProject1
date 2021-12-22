using RetailAPI.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RetailerAPI.Services
{
    public interface IEmailService
    {
        bool SendEmail(EmailData emailData);
    }
}
