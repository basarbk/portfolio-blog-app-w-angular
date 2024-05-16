import { Component, Input } from '@angular/core';
import { AVAILABLE_REACTIONS, Article } from '../../../../shared/types';
import { RouterLink } from '@angular/router';
import { ArticleInfoComponent } from '../../../article-info/article-info.component';
import { ImageWithFallbackComponent } from '../../../image-with-fallback/image-with-fallback.component';
import { ReactionButtonComponent } from '../../../reaction-button/reaction-button.component';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [
    RouterLink,
    ArticleInfoComponent,
    ImageWithFallbackComponent,
    ReactionButtonComponent,
  ],
  templateUrl: './article-card.component.html',
})
export class ArticleCardComponent {
  @Input() article!: Article;
  reactions = AVAILABLE_REACTIONS;
}
