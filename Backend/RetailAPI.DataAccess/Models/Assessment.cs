using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RetailAPI.DataAccess.Models
{
    public class Assessment
    {
        [Key]
        public int AssessmentID { get; set; }
        public string AssessmentType { get; set; }
        public string ShortListedPosition { get; set; }
    }
}
