import { Component, Input } from '@angular/core';
import { Variant } from '../types';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html'
})
export class AlertComponent {

  @Input() variant: Variant = 'success'

  get alertClass(){
    const classes = ['alert']
    classes.push(`alert-${this.variant}`)
    return classes.join(' ')
  }
}
