import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from '../../../shared/article.service';

@Component({
  selector: 'app-article-editor-page',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './article-editor-page.component.html'
})
export class ArticleEditorPageComponent {

  private articleService = inject(ArticleService);

  title = new FormControl<string>('', { nonNullable: true})
  content = new FormControl<string>('', { nonNullable: true})

  id: number = 0

  submit(){
    this.articleService.createOrUpdateArticle({
      title: this.title.value,
      content: this.content.value
    },
    this.id
  ).subscribe((data) => {
      this.id = data.id
    })
  }

}
