using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RetailerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileUploadingController : ControllerBase
    {
        //[HttpPost]
        //public async Task<string> UploadFile()
        //{
        //var ctx = HttpContext.Current;
        //var root = ctx.Server.MapPath("~/App_Data");
        //var provider = new MultipartDataStreamProvider(root);

        //try
        //{
        //    await Request.Content.ReadAsMultipartAsync(provider);

        //    foreach(var file in provider.FileData)
        //    {
        //        var name = file.Headers
        //                    .ContentDisposition
        //                    .FileName;

        //        //remove doble quotes from string
        //        name = name.Trim('"');

        //        var localFileName = file.LocalFileName;

        //        var filePath = PathString.Combine(root, name);

        //        File.Move(localFileName, filePath);
        //            }
        //        }
        //        catch(Exception e)
        //        {
        //            return $"Error: {e.Message}";
        //        }

        //        return "File Uploaded";
        //    }
        //}
    }
}