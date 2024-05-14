import { Component, Input } from '@angular/core';
import { Article } from '../../../../shared/types';
import { RouterLink } from '@angular/router';
import { ArticleInfoComponent } from '../../../article-info/article-info.component';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterLink, ArticleInfoComponent],
  templateUrl: './article-card.component.html',
})
export class ArticleCardComponent {
  @Input() article!: Article;
}
