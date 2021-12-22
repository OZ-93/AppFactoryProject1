using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RetailAPI.DataAccess.Models
{
    public class ClientUser:User
    {
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string RetailerName { get; set; }
    }
}
