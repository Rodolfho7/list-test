import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class OptionsMenuComponent {

  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() { }

}
