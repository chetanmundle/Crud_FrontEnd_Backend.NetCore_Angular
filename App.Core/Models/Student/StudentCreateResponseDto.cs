using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Core.Models.Student
{
    public class StudentCreateResponseDto
    {
        public bool result {  get; set; }

        public StudentDto StudentDto { get; set; }
    }
}
