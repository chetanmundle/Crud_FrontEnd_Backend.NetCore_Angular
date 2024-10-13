import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  http = inject(HttpClient);

  onSave() {
    // this.stdData = this.studentObj;
    this.http
      .post('https://localhost:7169/api/Student', this.studentObj)
      .subscribe((result) => {
        if (result) {
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
      });
  }
}
