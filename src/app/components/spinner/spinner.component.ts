import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [],
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent {

  @Input() size: 'small' | 'regular' = 'small'
  @Input() full = false

  get spinnerClass(){
    const classes = ['spinner-border']
    if(this.size==='small') {
      classes.push('spinner-border-sm')
    }
    return classes.join(' ')
  }

  get wrapperClass(){
    if(this.full) return 'bg-white border border-3 rounded-4 text-center p-4'
    return 'd-inline'
  }

}
