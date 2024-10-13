import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

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

  studentList: any[] = [];

  getAllStudent() {
    this.http.get('https://localhost:7169/api/Student').subscribe(
      (result: any) => {
        this.studentList = result;
      },
      (error) => {
        // if error
        console.log(error);
      }
    );
  }
}
