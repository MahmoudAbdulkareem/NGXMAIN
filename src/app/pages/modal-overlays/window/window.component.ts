import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-window',
  templateUrl: 'window.component.html',
  styleUrls: ['window.component.scss'],
})
export class WindowComponent {
  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;

  constructor(private windowService: NbWindowService, private http: HttpClient) {}

  openWindow(contentTemplate: TemplateRef<any>) {
    this.windowService.open(contentTemplate, {
      title: 'Window content from template',
      context: {
        text: 'some text to pass into template',
      },
    });
  }

  openWindowForm() {
    this.windowService.open(WindowComponent, { title: `Window` });
  }

  openWindowWithoutBackdrop() {
    this.windowService.open(this.disabledEscTemplate, {
      title: 'Window without backdrop',
      hasBackdrop: false,
      closeOnEsc: false,
    });
  }

  validate() {
    const emailData = {
      to: 'negamex4274@gmail.com',
      subject: 'Validation Notification',
      body: 'The documents have been validated.',
    };

    this.http.post('http://your-backend-url/send-email', emailData).subscribe(
      response => {
        console.log('Email sent successfully:', response);
      },
      error => {
        console.error('Error sending email:', error);
      }
    );
  }
}
