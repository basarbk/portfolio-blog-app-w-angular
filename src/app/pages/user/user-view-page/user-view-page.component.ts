import { Component, inject } from '@angular/core';
import { FeedComponent } from '../../../components/feed/feed.component';
import { ActivatedRoute } from '@angular/router';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@Component({
  selector: 'app-user-view-page',
  standalone: true,
  imports: [FeedComponent, ProfileCardComponent],
  templateUrl: './user-view-page.component.html',
})
export class UserViewPageComponent {
  readonly route = inject(ActivatedRoute);
}
