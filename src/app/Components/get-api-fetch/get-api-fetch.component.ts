import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student.service';

@Component({
  selector: 'app-get-api-fetch',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './get-api-fetch.component.html',
  styleUrl: './get-api-fetch.component.css',
})
export class GetApiFetchComponent implements OnInit {
  // http  = inject(HttpClient);
  // Or
  constructor(private http: HttpClient) {
    // this.getAllStudent();
  }
  ngOnInit(): void {
    this.getAllStudent();
  }

  studentService = inject(StudentService);
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
}

// (result: any) => {
//   this.studentList = result;
// },
// (error) => {
//   // if error
//   console.log(error);
// }
