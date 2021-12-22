using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RetailAPI.DataAccess.Models
{
    public class ResultDetail
    {

        [Key]
        public int DetailID { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string RName { get; set; }


        [Required]
        [Column(TypeName = "varchar(100)")]
        public string RMobile { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
        [DataType(DataType.EmailAddress)]
        public string REmail { get; set; }


    }
}
