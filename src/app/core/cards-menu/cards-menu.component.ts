import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-menu',
  templateUrl: './cards-menu.component.html',
  styleUrls: ['./cards-menu.component.css']
})
export class CardsMenuComponent implements OnInit {
  photoUrl: string = '../../../../assets/css/images/user-default-white.png';

  constructor() { }

  ngOnInit(): void {
  }

}
