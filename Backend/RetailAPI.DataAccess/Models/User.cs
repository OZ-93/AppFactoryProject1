using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RetailAPI.DataAccess.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string FirstName { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string LastName { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string ContactNo { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Password { get; set; }

        //Foreing Key
        public UserType UserType { get; set; }
    }
}
