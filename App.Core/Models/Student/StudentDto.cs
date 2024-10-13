using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Core.Models.Student
{
    public class StudentDto
    {
        public int StudentId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string UserName { get; set; }
        public string City { get; set; }

        public string State { get; set; }

        public int Zip { get; set; }

        public bool IsChecked { get; set; }
    }
}
