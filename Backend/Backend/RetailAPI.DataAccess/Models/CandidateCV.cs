using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RetailAPI.DataAccess.Models
{
    [Table("tblCandidateCV")]
    public class CandidateCV
    {
        [Key]
        public int CandidateCVID { get; set; }

        [Column(TypeName = "varchar(50)")]
        public string Name { get; set; }

        public string FilePath { get; set; }
    }
}
