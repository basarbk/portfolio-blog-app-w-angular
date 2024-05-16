import { Component, EventEmitter, Output } from '@angular/core';
import { Reaction } from '../../../../shared/types';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  @Output() setFilter = new EventEmitter<null | Reaction>();

  onClick(param: null | Reaction) {
    this.setFilter.emit(param);
  }
}
