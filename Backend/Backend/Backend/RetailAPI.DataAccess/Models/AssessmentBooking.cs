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

        //candidate details
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string firstName { get; set; }


        [Required]
        [Column(TypeName = "varchar(100)")]
        public string lastName { get; set; }


        [Required]
        [Column(TypeName = "varchar(100)")]
        public string IdNumber { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Email { get; set; }


        [Required]
        [Column(TypeName = "varchar(100)")]
        public string contactNo { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string RetailerName { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string ShortListedPosition { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string BranchName { get; set; }


        [Required, Column(TypeName = "Date"), DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime PreferredDate { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string AssessmentType { get; set; }

        //Invoice
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string IName { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string IMobile { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string IEmail { get; set; }

        //Report
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string RName { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string RMobile { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string REmail { get; set; }

        //Dates
        [Required]
        public DateTime CreationDate { get; set; } = DateTime.Now.Date;

        [Required, Column(TypeName = "Date"), DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime ScheduledDate { get; set; } 

        //[Required]
        //[Column (TypeName ="varchar(100)")]
        //public string BookingStatus { get; set; }


        //[Required]
        //[Column(TypeName = "varchar(100)")]
        //public string AssessmentType { get; set; }


        //[Required]
        //public DateTime CreationDate { get; set; } = DateTime.Now;


        //[Required]
        //public DateTime PrefferedDated { get; set; }

        //[Required]
        //public DateTime ScheduledDate { get; set; }

        ////[Required]
        ////public User User { get; set; }

        ////[Required]
        ////public PaymentDetail PaymentDetail { get; set; }
        //[Required]
        //[Column(TypeName = "varchar(100)")]
        //public string IName { get; set; }


        //[Required]
        //[Column(TypeName = "varchar(100)")]
        //public string IMobile { get; set; }
        //[Required]
        //[Column(TypeName = "varchar(100)")]
        //[DataType(DataType.EmailAddress)]
        //public string IEmail { get; set; }

        ////[Required]
        ////public ResultDetail ResultDetail { get; set; }
        //[Required]
        //[Column(TypeName = "varchar(100)")]
        //public string RName { get; set; }


        //[Required]
        //[Column(TypeName = "varchar(100)")]
        //public string RMobile { get; set; }
        //[Required]
        //[Column(TypeName = "varchar(100)")]
        //[DataType(DataType.EmailAddress)]
        //public string REmail { get; set; }
        //public CandidateCV CandidateCV { get; set; }

        //[Required]
        //public string BookingStatus { get; set; }

        //[NotMapped]
        //public IFormFile CandidateCVCopy { get; set; }


        ////Candicate
        //public string FirstName { get; set; }

        //[Required]
        //[Column(TypeName = "varchar(100)")]
        //public string LastName { get; set; }

        //[Required]
        //[Column(TypeName = "varchar(100)")]
        //public string ContactNo { get; set; }

        //[Required]
        //[Column(TypeName = "varchar(100)")]
        //[DataType(DataType.EmailAddress)]
        //public string Email { get; set; }

        //[Required]
        //[Column(TypeName = "varchar(100)")]
        //public string IdentityNumber { get; set; }

        ////Changed
        //[Required]
        //[Column(TypeName = "varchar(100)")]
        //public string ShortListedPosition { get; set; }

        //[Required]
        //[ForeignKey("CandidateCVID")]
        //public int CandidateCVID { get; set; }


    }
}
