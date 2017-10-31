import { Injectable } from '@angular/core';
import { Path } from './path.model';
import { PATHS } from './mock-paths';


@Injectable()
export class PathService {

  constructor() { }

  getPaths() {
    return PATHS;
  }

  getPathById(pathId: number) {
    for(let i = 0; i < PATHS.length; i++) {
      if(PATHS[i].id === pathId) {
        return PATHS[i];
      }
    }
  }

}
