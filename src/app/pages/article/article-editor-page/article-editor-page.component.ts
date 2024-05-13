import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArticleService } from '../../../shared/article.service';
import { PublishButtonComponent } from '../components/publish-button/publish-button.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-article-editor-page',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, PublishButtonComponent],
  templateUrl: './article-editor-page.component.html',
})
export class ArticleEditorPageComponent {
  private articleService = inject(ArticleService);

  title = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  content = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  id: number = 0;
  apiProgress = false;

  errors:
    | { title: string | undefined; content: string | undefined }
    | undefined;

  constructor() {
    this.title.valueChanges.subscribe(() => {
      if (this.errors?.title) {
        this.errors.title = undefined;
      }
    });
    this.content.valueChanges.subscribe(() => {
      if (this.errors?.content) {
        this.errors.content = undefined;
      }
    });
  }

  checkValidity() {
    let valid = true;
    const validationErrors: typeof this.errors = {
      title: undefined,
      content: undefined,
    };

    if (this.title.errors) {
      validationErrors.title = 'Invalid title';
      valid = false;
    }

    if (this.content.errors) {
      validationErrors.content = 'Invalid content';
      valid = false;
    }

    this.errors = validationErrors;

    return valid;
  }

  submit() {
    if (!this.checkValidity()) return;
    this.apiProgress = true;
    this.articleService
      .createOrUpdateArticle(
        {
          title: this.title.value,
          content: this.content.value,
        },
        this.id
      )
      .subscribe({
        next: (data) => {
          this.apiProgress = false;
          this.id = data.id;
        },
        error: (httpError: HttpErrorResponse) => {
          this.apiProgress = false;
          if (httpError.status === 400) {
            this.errors = httpError.error.validationErrors;
          }
        },
      });
  }
}
