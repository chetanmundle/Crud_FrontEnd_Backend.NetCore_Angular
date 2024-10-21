import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private http = inject(HttpClient);

  Url: string = 'https://localhost:7169/api/Student';

  getAllStudent() {
    return this.http.get(this.Url);
  }

  createStudent(student: any) {
    return this.http.post(this.Url, student);
  }

  updateStudent(student: any) {
    return this.http.put(`${this.Url}/UpdateStudent`, student);
  }

  deleteStudent(studentId: any) {
    return this.http.delete(`${this.Url}/DeleteStudent/${studentId}`);
  }
}
