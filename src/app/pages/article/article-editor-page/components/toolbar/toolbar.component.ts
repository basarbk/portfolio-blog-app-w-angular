import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
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

  onClick(syntax: string) {
    const start = this.editor.selectionStart;
    const end = this.editor.selectionEnd;
    let selectedText = this.editor.value.substring(start, end);
    selectedText = syntax + selectedText + syntax;
    this.editor.setRangeText(selectedText, start, end);
    this.onChange.emit(this.editor.value);
  }
}
