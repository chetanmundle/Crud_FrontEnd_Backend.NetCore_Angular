import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../Services/student.service';

@Component({
  selector: 'app-post-api-fetch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-api-fetch.component.html',
  styleUrl: './post-api-fetch.component.css',
})
export class PostApiFetchComponent {
  studentObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zip: null,
    isChecked: false,
  };

  // stdData: any;

  private studentService = inject(StudentService);

  onSave() {
    // this.stdData = this.studentObj;
    this.studentService.createStudent(this.studentObj).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          alert('Data Saved SuccessFully');
          this.studentObj = {
            firstName: '',
            lastName: '',
            userName: '',
            city: '',
            state: '',
            zip: null,
            isChecked: false,
          };
        } else {
          alert('Unable to Save Data');
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
