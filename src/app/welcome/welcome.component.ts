import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  fullImagePath: string;
  constructor() {
    this.fullImagePath = 'assets/images/welcome-stranger.png';
  }

  ngOnInit() {}
}
