import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [NgIf],
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css'],
})
export class ConfirmationDialogComponent {
  @Input() message: string = '';
  @Output() confirm = new EventEmitter<boolean>();

  onConfirm(): void {
    this.confirm.emit(true);
  }

  onCancel(): void {
    this.confirm.emit(false);
  }
}
