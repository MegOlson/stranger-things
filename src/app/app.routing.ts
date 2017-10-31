import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartComponent } from './start/start.component';
import { PathComponent } from './path/path.component';
import { LoseComponent } from './lose/lose.component';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
   {
     path: 'start',
     component: StartComponent
   },
   {
     path: 'paths/:id',
     component: PathComponent
   },
   {
     path: 'lose',
     component: LoseComponent
   }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
