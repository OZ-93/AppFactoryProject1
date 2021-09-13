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
        public int AssessmentID { get; set; }
        public int CandidateID { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;
        public DateTime PrefferedDated { get; set; }
        public int UserID { get; set; }
        public int PaymentDetailiD { get; set; }
        public int ResultDetailiD { get; set; }
        public string BookingStatus { get; set; }


    }
}
