import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  player: Player;
  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.player = this.playerService.getPlayer();
  }

}
