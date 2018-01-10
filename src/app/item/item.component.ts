import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  @Input() choosenList;
  @Output() newSide = new EventEmitter();

  onAssign(changedSide) {
    this.newSide.emit(changedSide);
  }

  constructor() { }

  ngOnInit() {
  }

}
