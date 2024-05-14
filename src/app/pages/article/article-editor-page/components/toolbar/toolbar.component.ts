import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FileService } from '../../../../../shared/file.service';
import { ToastComponent } from '../../../../../components/toast/toast.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ToastComponent],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  private fileService = inject(FileService);

  actions = [
    {
      icon: 'format_bold',
      syntax: '**',
    },
    {
      icon: 'format_italic',
      syntax: '*',
    },
    {
      icon: 'strikethrough_s',
      syntax: '~~',
    },
    {
      icon: 'code',
      syntax: '```',
    },
  ];

  @Input() editor!: HTMLTextAreaElement;

  @Output() onChange = new EventEmitter<string>();

  error: string | undefined;

  onClick(syntax: string) {
    const start = this.editor.selectionStart;
    const end = this.editor.selectionEnd;
    let selectedText = this.editor.value.substring(start, end);
    selectedText = syntax + selectedText + syntax;
    this.editor.setRangeText(selectedText, start, end);
    this.onChange.emit(this.editor.value);
  }

  onSelectImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files) return;
    this.error = undefined;
    this.fileService.uploadFile(fileInput.files[0]).subscribe({
      next: (data) => {
        const imageText = `\n![image alt text](/api/assets/${data.filename})`;
        this.editor.setRangeText(imageText);
        this.onChange.emit(this.editor.value);
      },
      error: (httpError: HttpErrorResponse) => {
        if (httpError.status === 400) {
          this.error = httpError.error.validationErrors.file;
        } else {
          this.error = 'Unexpected error occurred, please try again';
        }
      },
    });
  }
}
