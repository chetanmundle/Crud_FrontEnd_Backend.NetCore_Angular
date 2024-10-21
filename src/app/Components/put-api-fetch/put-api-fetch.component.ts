import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../Services/student.service';

@Component({
  selector: 'app-put-api-fetch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './put-api-fetch.component.html',
  styleUrl: './put-api-fetch.component.css',
})
export class PutApiFetchComponent implements OnInit {
  studentObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zip: null,
    isChecked: false,
  };

  private studentService = inject(StudentService);

  ngOnInit(): void {
    this.getAllStudent();
  }

  studentList: any[] = [];

  getAllStudent() {
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
  d: any;

  onClickEdit(student: any) {
    this.studentObj = student;
  }

  onClickUpdate() {
    this.studentService.updateStudent(this.studentObj).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.studentObj = {
            firstName: '',
            lastName: '',
            userName: '',
            city: '',
            state: '',
            zip: null,
            isChecked: false,
          };
          alert(res.message);
        } else {
          console.log('Unable to Update the Data');
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Update Complete');
      },
    });
  }
}
