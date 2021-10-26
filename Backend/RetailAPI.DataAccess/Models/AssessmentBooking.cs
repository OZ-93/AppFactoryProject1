using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace RetailAPI.DataAccess.Models
{
    public class AssessmentBooking
    {
        [Key]
        public int BookingID { get; set; }

        [ForeignKey("AsessmentID")]
        [Required]
        public int AssessmentID { get; set; }

        [Required]
        public Candidate Candidate { get; set; }

        [Required]
        public DateTime CreationDate { get; set; } = DateTime.Now;


        [Required]
        public DateTime PrefferedDated { get; set; }

        [Required]
        public DateTime ScheduledDate { get; set; }

        //[Required]
        //public User User { get; set; }

        [Required]
        public AssessmentBookingDetail PaymentDetail { get; set; }

        [Required]
        public AssessmentBookingDetail ResultDetail { get; set; }
        public CandidateCV CandidateCV { get; set; }

        [Required]
        public string BookingStatus { get; set; }

        [NotMapped]
        public IFormFile CandidateCVCopy { get; set; }


    }
}
