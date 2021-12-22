using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace RetailAPI.DataAccess.Models
{
    [Authorize]
    public class User : IdentityUser
    {
        //[Key]
        //public int UserID { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string FirstName { get; set; }


        [Required]
        [Column(TypeName = "varchar(100)")]
        public string LastName { get; set; }


        //[Required]
        //[Column(TypeName = "varchar(100)")]
        //public string ContactNo { get; set; }



        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Password { get; set; }

        //Foreing Key
        [ForeignKey("UserTypeID")]
        public int UserType { get; set; }


     
       


    }
}
