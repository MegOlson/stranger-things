import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartComponent } from './start/start.component';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
   {
     path: 'start',
     component: StartComponent
   }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
