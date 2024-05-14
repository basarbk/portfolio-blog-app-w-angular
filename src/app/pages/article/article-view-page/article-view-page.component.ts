import { Component, OnInit, inject } from '@angular/core';
import { ArticleService } from '../../../shared/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../../shared/types';
import { HttpErrorResponse } from '@angular/common/http';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { AlertComponent } from '../../../components/alert/alert.component';
import { MoreArticlesComponent } from './components/more-articles/more-articles.component';
import { ArticleInfoComponent } from '../../../components/article-info/article-info.component';
import { PublishButtonComponent } from '../components/publish-button/publish-button.component';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-article-view-page',
  standalone: true,
  imports: [
    SpinnerComponent,
    AlertComponent,
    MoreArticlesComponent,
    ArticleInfoComponent,
    PublishButtonComponent,
  ],
  templateUrl: './article-view-page.component.html',
})
export class ArticleViewPageComponent implements OnInit {
  private articleService = inject(ArticleService);
  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);

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

  onTogglePublish(value: string | null) {
    this.article.publishedAt = value;
  }

  get isOwnedByLoggedInUser() {
    return this.article.author.id === this.authService.user.getValue().id;
  }
}
