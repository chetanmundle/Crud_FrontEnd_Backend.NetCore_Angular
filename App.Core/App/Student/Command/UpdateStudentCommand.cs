using App.Core.Interfaces;
using App.Core.Models.Responses;
using App.Core.Models.Student;
using Mapster;
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
    public class UpdateStudentCommand : IRequest<ResponseDto>
    {
        public StudentDto StudentDto { get; set; }
    }

    public class UpdateStudentCommandHandler : IRequestHandler<UpdateStudentCommand, ResponseDto>
    {
        private readonly IAppDbContext _appDbContext;

        public UpdateStudentCommandHandler(IAppDbContext appDbContext)
        {
            _appDbContext = appDbContext;            
        }

        public async Task<ResponseDto> Handle(UpdateStudentCommand request, CancellationToken cancellationToken)
        {
            var model = request.StudentDto;

            if (model == null)
            {
                return new ResponseDto
                {
                    Message = "Student is Null",
                    Status = 400,
                    Data = null
                };
            };

            var existingStudent = await _appDbContext.Set<Domain.Entities.Student>()
                                        .FirstOrDefaultAsync(st => st.StudentId == model.StudentId, cancellationToken: cancellationToken);

            if (existingStudent == null)
            {
                return new ResponseDto
                {
                    Message = "Student With This id Not Exist",
                    Status = 404,
                    Data = null
                };
            };

            existingStudent.FirstName = model.FirstName;
            existingStudent.LastName = model.LastName;
            existingStudent.UserName = model.UserName;
            existingStudent.City = model.City;
            existingStudent.State = model.State;
            existingStudent.Zip = model.Zip;
            existingStudent.IsChecked = model.IsChecked;

            await _appDbContext.SaveChangesAsync(cancellationToken);

            return new ResponseDto
            {
                Message = "Data Updated Successfully",
                Status = 200,
                Data = existingStudent
            };


        }
    }
}
