import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  player: Player;

  fullImagePath: string;
  constructor( private router: Router, private playerService: PlayerService) {
    this.fullImagePath = 'assets/images/welcome-stranger.png';
  }

  submitForm(name: string, color: string) {
    this.player = new Player(name, color);
    this.playerService.setPlayer(this.player);
    this.router.navigate(['start']);
  }

  ngOnInit() {}
}
