import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newCharacter = '';
  @Output() addedCharacter = new EventEmitter<string>();
  onAddCharacter() {
    this.addedCharacter.emit(this.newCharacter);
  }
  constructor() { }

  ngOnInit() {
  }

}
