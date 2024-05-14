import { Component, OnInit, inject } from '@angular/core';
import { ArticleService } from '../../shared/article.service';
import { Article, Page } from '../../shared/types';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [ArticleCardComponent, ButtonComponent],
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  private articleService = inject(ArticleService);

  data: Page<Article> = {
    content: [],
    page: 0,
    size: 5,
    total: 0,
  };

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(page: number = 0) {
    this.articleService
      .fetchArticles(page, this.data.size)
      .subscribe((data) => {
        this.data = {
          content: [...this.data.content, ...data.content],
          page: data.page,
          size: data.size,
          total: data.total,
        };
      });
  }
}
