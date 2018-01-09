import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootItems = ['Mhelvin', 'Sandy', 'June'];
  onItemWasAdded(newItem) {
    this.rootItems.push(newItem);
  }
}
