import { Component, OnInit, inject } from '@angular/core';
import { ArticleService } from '../../../shared/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../../shared/types';
import { HttpErrorResponse } from '@angular/common/http';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { AlertComponent } from '../../../components/alert/alert.component';
import { MoreArticlesComponent } from './components/more-articles/more-articles.component';
import { ArticleInfoComponent } from '../../../components/article-info/article-info.component';

@Component({
  selector: 'app-article-view-page',
  standalone: true,
  imports: [
    SpinnerComponent,
    AlertComponent,
    MoreArticlesComponent,
    ArticleInfoComponent,
  ],
  templateUrl: './article-view-page.component.html',
})
export class ArticleViewPageComponent implements OnInit {
  private articleService = inject(ArticleService);
  private route = inject(ActivatedRoute);

  article!: Article;

  status: 'loading' | 'success' | 'fail' = 'loading';
  message: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.status = 'loading';
      this.articleService.fetchArticle(params['idOrSlug']).subscribe({
        next: (data) => {
          this.status = 'success';
          this.article = data;
        },
        error: (httpError: HttpErrorResponse) => {
          this.status = 'fail';
          if (httpError.status) {
            this.message = httpError.error.message;
          } else {
            this.message = 'Unexpected error occurred, please try again';
          }
        },
      });
    });
  }
}
