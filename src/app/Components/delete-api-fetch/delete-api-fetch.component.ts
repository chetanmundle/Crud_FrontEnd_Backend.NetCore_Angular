import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  constructor(private http: HttpClient) {}

  getAllStudents() {
    this.http
      .get('https://localhost:7169/api/Student')
      .subscribe((res: any) => {
        this.studentList = res;
      });
  }

  onClickDelete(StudentId: number) {
    this.http
      .delete(`https://localhost:7169/api/Student/DeleteStudent/${StudentId}`)
      .subscribe(
        (res: any) => {
          if (res.statusCode == 200) {
            alert(res.message);
            this.getAllStudents();
          } else {
            console.log('unable to delete Student');
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
