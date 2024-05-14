import { Component, Input } from '@angular/core';
import { Author } from '../../shared/types';
import { RouterLink } from '@angular/router';
import { format } from 'timeago.js';

@Component({
  selector: 'app-article-info',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-info.component.html',
})
export class ArticleInfoComponent {
  @Input() author!: Author;

  formattedPublishedAt: string | null = null;

  @Input() set publishedAt(value: string | null | undefined) {
    if (value) {
      this.formattedPublishedAt = format(value);
    } else {
      this.formattedPublishedAt = null;
    }
  }
}
