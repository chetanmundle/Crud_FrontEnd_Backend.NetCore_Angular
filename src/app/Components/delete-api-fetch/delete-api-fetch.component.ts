import { Component, inject, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student.service';

@Component({
  selector: 'app-delete-api-fetch',
  standalone: true,
  imports: [],
  templateUrl: './delete-api-fetch.component.html',
  styleUrl: './delete-api-fetch.component.css',
})
export class DeleteApiFetchComponent implements OnInit {
  ngOnInit(): void {
    this.getAllStudents();
  }
  studentList: any[] = [];

  studentService = inject(StudentService);

  getAllStudents() {
    this.studentService.getAllStudent().subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.studentList = res.data;
        } else {
          console.log(res);
        }
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Complete Fetach');
      },
    });
  }

  onClickDelete(StudentId: number) {
    if (confirm('Sure! You Want to Delete This Data ')) {
      this.studentService.deleteStudent(StudentId).subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            alert(res.message);
            this.getAllStudents();
          } else {
            console.log('unable to delete Student');
          }
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Delete Complete');
        },
      });
    }
  }
}
