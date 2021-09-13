using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace RetailAPI.DataAccess.Models
{
    public class AssessmentBookingDetail
    {
        [Key]
        public int DetailID { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string ContactNo { get; set; }
        public string Email { get; set; }
        public int PaymentDetailID { get; set; }
        public int ResultDetailID { get; set; }
        public string Designation { get; set; }
    }
}
