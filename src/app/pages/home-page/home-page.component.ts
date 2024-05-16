import { Component } from '@angular/core';
import { FeedComponent } from '../../components/feed/feed.component';
import { FilterComponent } from './components/filter/filter.component';
import { Reaction } from '../../shared/types';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FeedComponent, FilterComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  filter: null | Reaction = null;

  onChangeFilter(param: null | Reaction) {
    this.filter = param;
  }
}
