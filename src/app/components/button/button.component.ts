import { Component, Input } from '@angular/core';
import { Variant } from '../types';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './button.component.html'
})
export class ButtonComponent {

  @Input() variant: Variant = 'primary'

  @Input() disabled = false

  @Input() apiProgress = false

  get buttonClass(){
    const classes = ['btn']
    classes.push(`btn-${this.variant}`)
    return classes.join(' ')
  }
}
