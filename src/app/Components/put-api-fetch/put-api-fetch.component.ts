import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllStudent();
  }

  studentList: any[] = [];

  getAllStudent() {
    this.http.get('https://localhost:7169/api/Student').subscribe(
      (result: any) => {
        this.studentList = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  d: any;

  onClickEdit(student: any) {
    this.studentObj = student;
  }

  onClickUpdate() {
    this.http
      .put('https://localhost:7169/api/Student/UpdateStudent', this.studentObj)
      .subscribe(
        (result: any) => {
          if (result.statusCode) {
            this.studentObj = {
              firstName: '',
              lastName: '',
              userName: '',
              city: '',
              state: '',
              zip: null,
              isChecked: false,
            };
            alert(result.message);
          }
        },
        (errr) => {
          console.log('Unable to update Student');
        }
      );
  }
}
