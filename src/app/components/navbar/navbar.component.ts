import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, UserComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  loggedIn = false;

  constructor(private authService: AuthService) {
    this.authService.user.subscribe((data) => {
      this.loggedIn = data.id > 0;
    });
  }
}
