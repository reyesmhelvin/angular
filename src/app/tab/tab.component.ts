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

  choosenList = 0;

  onCharacterWasAdded(character) {
    this.characters.push({name: character, side: 0});
  }

  onChoose(side) {
    this.choosenList = side;
  }

  getCharacters() {
    if (this.choosenList === 0) {
      return this.characters.slice();
    }
    return this.characters.filter((character) => {
      return character.side === this.choosenList;
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
