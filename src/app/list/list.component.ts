import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() characters;
  @Input() choosenList;
  @Output() newSide = new EventEmitter();

  setNewSide(event) {
    this.newSide.emit(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
