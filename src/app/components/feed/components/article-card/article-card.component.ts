import { Component, Input } from '@angular/core';
import { Article } from '../../../../shared/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-card.component.html',
})
export class ArticleCardComponent {
  @Input() article!: Article;
}
