using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RetailAPI.DataAccess.Models
{
    public class PaymentDetail
    {
        [Key]
        public int DetailID { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string IName { get; set; }

       
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string IMobile { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
        [DataType(DataType.EmailAddress)]
        public string IEmail { get; set; }

     
    }
}
