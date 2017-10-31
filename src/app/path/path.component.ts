import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Path } from '../path.model';
import { PathService } from '../path.service';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css'],
  providers: [PathService]
})
export class PathComponent implements OnInit {
  pathId: number = null;
  pathToDisplay: Path;
  player: Player;
  paths: Path[];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService,
    private pathService: PathService,
    private router: Router
  ) { }

  ngOnInit() {
    this.player = this.playerService.getPlayer();
    this.paths = this.pathService.getPaths();
    this.route.params.forEach((urlParameters) => {
      this.pathId = parseInt(urlParameters['id']);
    });
    this.pathToDisplay = this.pathService.getPathById(this.pathId);
    console.log(this.pathToDisplay);
  }

  option1(pathToDisplayNext: Path) {
    this.pathId = parseInt(pathToDisplayNext.option1[1]);
    this.pathToDisplay = this.pathService.getPathById(this.pathId);
    this.router.navigate(['paths', this.pathId]);
  }

  // option1(pathToDisplay: Path) {
  //   this.pathId = parseInt(pathToDisplay.option1[1]);
  //   this.pathToDisplay = this.pathService.getPathById(this.pathId);
  //   this.router.navigate(['paths', this.pathId]);
  // }

}
