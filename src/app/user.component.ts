import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type='text' [(ngModel)]="name"/>
    <p>{{name}}</p>
  `
})
export class UserComponent {
  name = 'MOR';

  onUserSubmit(event) {
    this.name = event.target.value;
  }
}
