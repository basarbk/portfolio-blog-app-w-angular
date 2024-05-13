import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  loggedIn = false

  constructor(private authService: AuthService) {
    this.authService.user.subscribe((data) => {
      this.loggedIn = data.id > 0
    })
  }

  logout(){
    this.authService.logout().subscribe()
  }

}
