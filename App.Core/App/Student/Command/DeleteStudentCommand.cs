using App.Core.Interfaces;
using App.Core.Models.Responses;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace App.Core.App.Student.Command
{
    public class DeleteStudentCommand : IRequest<ResponseDto>
    {
        public int StudentId { get; set; }
    }

    public class DeleteStudentCommandHandler : IRequestHandler<DeleteStudentCommand, ResponseDto>
    {
        private readonly IAppDbContext _appDbContext;

        public DeleteStudentCommandHandler(IAppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<ResponseDto> Handle(DeleteStudentCommand request, CancellationToken cancellationToken)
        {

            var studentId = request.StudentId;

            if(studentId <= 0) return new ResponseDto
            {
                Message = "StudentId Not Valid",
                StatusCode = 400,
                Data = null
            };

            var student = await _appDbContext.Set<Domain.Entities.Student>()
                                       .FirstOrDefaultAsync(st => st.StudentId == studentId);

            if (student is null) return new ResponseDto
            {
                Message = "Student With this Id not found",
                StatusCode = 404,
                Data = null
            };

            _appDbContext.Set<Domain.Entities.Student>()
                         .Remove(student);

            await _appDbContext.SaveChangesAsync(cancellationToken);

            return new ResponseDto
            {
                Message = "Student Deleted SucessFully",
                StatusCode = 200
            };
           

        }
    }

}
