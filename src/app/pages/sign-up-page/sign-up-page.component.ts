import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up-page.component.html'
})
export class SignUpPageComponent {

  email = new FormControl<string>('')

  isDisabled(){
    return !this.email.value
  }
}
