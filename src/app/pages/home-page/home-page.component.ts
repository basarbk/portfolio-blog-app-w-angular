import { Component, inject } from '@angular/core';
import { FeedComponent } from '../../components/feed/feed.component';
import { FilterComponent } from './components/filter/filter.component';
import { Reaction } from '../../shared/types';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FeedComponent, FilterComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  private authService = inject(AuthService);
  filter: null | Reaction = null;

  onChangeFilter(param: null | Reaction) {
    this.filter = param;
  }

  get isLoggedIn() {
    return this.authService.user.getValue().id !== 0;
  }
}
