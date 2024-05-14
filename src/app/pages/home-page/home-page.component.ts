import { Component } from '@angular/core';
import { FeedComponent } from '../../components/feed/feed.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
