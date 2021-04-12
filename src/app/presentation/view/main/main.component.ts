import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/infra/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  get usuario() {
    return this.authService.credentials;
  }

  logout() {
    this.authService.setCredentials(null);
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
