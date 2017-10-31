import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { PlayerService } from './player.service';
import { StartComponent } from './start/start.component';
import { PathComponent } from './path/path.component';
import { LoseComponent } from './lose/lose.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StartComponent,
    PathComponent,
    LoseComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
