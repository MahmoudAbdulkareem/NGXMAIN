import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private emailApiUrl = '/api/send-email'; // Your backend API endpoint

  constructor(private http: HttpClient) {}

  sendEmail(subject: string, body: string): Observable<any> {
    const emailData = {
      subject,
      body,
      to: 'recipient@example.com', // Replace with actual recipient email
    };
    return this.http.post(this.emailApiUrl, emailData);
  }
}
