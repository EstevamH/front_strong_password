import { Injectable } from '@angular/core';
import { Routes, Route as ngRoute } from '@angular/router';

import { AuthGuard } from '../../../infra/auth/auth.guard';
import { MainComponent } from '../main/main.component';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  static withShell(routes: Routes): ngRoute {
    return {
      path: '',
      component: MainComponent,
      children: routes,
      canActivate: [AuthGuard],
    };
  }
}
