using App.Core.App.Student.Command;
using App.Core.App.Student.Query;
using App.Core.Models.Student;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Student_Crud_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IMediator _mediator;

        public StudentController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> CreateStudent(StudentDto studentDto)
        {
            return Ok(await  _mediator.Send(new CreateSudentCommand { StudentDto = studentDto}));
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _mediator.Send(new GetAllStudentQuery()));
        }

        [HttpPut("[action]")]
        public async Task<IActionResult> UpdateStudent(StudentDto studentDto)
        {
            return Ok(await _mediator.Send(new UpdateStudentCommand { StudentDto = studentDto}));
        }

        [HttpDelete("[action]/{id:int}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            return Ok(await _mediator.Send(new DeleteStudentCommand { StudentId = id }));
        }
    }
}
