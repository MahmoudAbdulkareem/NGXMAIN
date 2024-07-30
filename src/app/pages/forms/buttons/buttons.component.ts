import { Component, TemplateRef } from '@angular/core';
import { NbDialogService, NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  modificationHistory = [
    {
      date: '2024-07-28',
      status: 'Updated',
      modifiedBy: 'User A',
      oldValue: 'Old Value A',
      newValue: 'New Value A',
    },
  
  ];

  private dialogRef: NbDialogRef<any>;

  constructor(private dialogService: NbDialogService) {}

  openHistoryDialog(dialogTemplate: TemplateRef<any>) {
    this.dialogRef = this.dialogService.open(dialogTemplate);
  }

  closeHistoryDialog() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  submit() {
  }

  cancel() {
  }

  saveAndClose() {
  }
}
