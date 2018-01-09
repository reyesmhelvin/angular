import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type='text' (input)="onUserSubmit($event)" [value]="name"/>
    <p>{{name}}</p>
    <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  @Input() name;
  @Output() nameChanged = new EventEmitter<string>();

  onUserSubmit(event) {
    this.nameChanged.emit(event.target.value);
  }
}
