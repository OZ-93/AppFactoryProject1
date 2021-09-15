using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RetailAPI.DataAccess.Models
{
    public class AssessmentBooking
    {
        [Key]
        public int BookingID { get; set; }

        [Required]
        public Assessment Assessment { get; set; }
        [Required]
        public Candidate Candidate { get; set; }
        [Required]
        public DateTime CreationDate { get; set; } = DateTime.Now;
        [Required]
        public DateTime PrefferedDated { get; set; }
        [Required]
        public User User { get; set; }
        [Required]
        public int PaymentDetailiD { get; set; }
        [Required]
        public int ResultDetailiD { get; set; }
        [Required]
        public string BookingStatus { get; set; }


    }
}
