import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  characters = [
    {name: 'Sandy', side: 2 },
    {name: 'June', side: 2 },
    {name: 'Mhelvin', side: 1 }
  ];

  onCharacterWasAdded(character) {
    this.characters.push({name: character, side: 0});
  }

  constructor() { }

  ngOnInit() {
  }

}
