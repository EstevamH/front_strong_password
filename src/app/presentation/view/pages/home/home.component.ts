import { Component } from '@angular/core';
import { AuthService } from 'src/app/infra/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  get usuario() {
    return this.authService.credentials;
  }
}
