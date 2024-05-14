import { Component, OnInit, inject } from '@angular/core';
import { ArticleService } from '../../../shared/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../../shared/types';

@Component({
  selector: 'app-article-view-page',
  standalone: true,
  imports: [],
  templateUrl: './article-view-page.component.html',
})
export class ArticleViewPageComponent implements OnInit {
  private articleService = inject(ArticleService);
  private route = inject(ActivatedRoute);

  article: Article | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.articleService.fetchArticle(params['idOrSlug']).subscribe((data) => {
        this.article = data;
      });
    });
  }
}
