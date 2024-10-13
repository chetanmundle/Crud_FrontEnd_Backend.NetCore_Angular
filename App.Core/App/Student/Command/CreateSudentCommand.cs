using App.Core.Interfaces;
using App.Core.Models.Student;
using Domain.Entities;
using Mapster;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace App.Core.App.Student.Command
{
    public class CreateSudentCommand : IRequest<StudentCreateResponseDto>
    {
        public StudentDto StudentDto { get; set; }
    }

    public class CreateSudentCommandHandler : IRequestHandler<CreateSudentCommand, StudentCreateResponseDto>
    {
        private readonly IAppDbContext _appDbContext;

        public CreateSudentCommandHandler(IAppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<StudentCreateResponseDto> Handle(CreateSudentCommand request, CancellationToken cancellationToken)
        {
            var model = request.StudentDto;

            if (model == null) return null;

            var student = model.Adapt<Domain.Entities.Student>();

            await _appDbContext.Set<Domain.Entities.Student>().AddAsync(student, cancellationToken);

            await _appDbContext.SaveChangesAsync(cancellationToken);

            var studentDto = student.Adapt<StudentDto>();

            var result = new StudentCreateResponseDto()
            {
                result = true,
                StudentDto = studentDto,
            }; 

            return result;
        }

        
    }
}
