import { Component, Input } from '@angular/core';
import { Variant } from '../types';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
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
