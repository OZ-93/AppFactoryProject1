using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RetailAPI.DataAccess.Models
{
    public class UserType
    {
        [Key]
        public int UserTypeID { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
   
        public string Description { get; set; }
    }
}
