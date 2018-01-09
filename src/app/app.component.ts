import { Component } from '@angular/core';
import { random } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootName = 'Mhelvin';
  num = 0;
  onNameChange(newName) {
    this.rootName = newName;
  }
  Inc() {
    this.num = random(1, 10);
  }
}
