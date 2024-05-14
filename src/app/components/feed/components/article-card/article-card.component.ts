import { Component, Input } from '@angular/core';
import { Article } from '../../../../shared/types';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [],
  templateUrl: './article-card.component.html',
})
export class ArticleCardComponent {
  @Input() article!: Article;
}
