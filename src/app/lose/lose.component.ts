import { Component } from '@angular/core';

@Component({
  selector: 'app-lose',
  templateUrl: './lose.component.html',
  styleUrls: ['./lose.component.css']
})
export class LoseComponent {

  fullImagePath: string;
  constructor() {
    this.fullImagePath = 'assets/images/youre-dead.png';
  }


}
