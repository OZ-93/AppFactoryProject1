using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RetailAPI.DataAccess.Models
{
    public class AssessmentBookingDetail
    {
        [Key]
        public int DetailID { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Firstname { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Lastname { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string ContactNo { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Designation { get; set; } //State Detail type(Paying or recieving results) drop down
    }
}
