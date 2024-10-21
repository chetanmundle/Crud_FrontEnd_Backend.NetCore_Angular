using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Core.Models.Responses
{
    public class ResponseDto
    {
        public string Message { get; set; }

        public int Status { get; set; }

        public object Data { get; set; }
    }
}
