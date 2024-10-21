using App.Core.Interfaces;
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

namespace App.Core.App.Student.Query
{
    public class GetAllStudentQuery : IRequest<object>
    {

    }

    public class GetAllStudentQueryHandler : IRequestHandler<GetAllStudentQuery, object>
    {
        private readonly IAppDbContext _appDbContext;

        public GetAllStudentQueryHandler(IAppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<object> Handle(GetAllStudentQuery request, CancellationToken cancellationToken)
        {
            var studdntList = await _appDbContext.Set<Domain.Entities.Student>()
                         .AsNoTracking()
                         .ToListAsync();

            var result = studdntList.Adapt<List<StudentDto>>();

            return new
            {
                Status = 200,
                Message = "Data Fetch Successfully",
                Data = result
            };
        }
    }
}
