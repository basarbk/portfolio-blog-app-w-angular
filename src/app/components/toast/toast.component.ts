import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
})
export class ToastComponent implements OnChanges {
  @Input() message: string | undefined;
  show = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['message'].currentValue !== changes['message'].previousValue &&
      !changes['message'].firstChange
    ) {
      this.showToast();
    }
  }

  showToast() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 5000);
  }
}
