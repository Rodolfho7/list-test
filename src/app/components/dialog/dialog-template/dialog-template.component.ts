import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-template',
  templateUrl: './dialog-template.component.html',
  styleUrls: ['./dialog-template.component.scss']
})
export class DialogTemplateComponent {

  @Input() isValid = false;
  @Input() title: string = '';
  @Output() closeDialog = new EventEmitter<boolean>();

  constructor() { }

}
