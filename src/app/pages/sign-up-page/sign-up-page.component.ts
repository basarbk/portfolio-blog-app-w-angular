import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up-page.component.html'
})
export class SignUpPageComponent {
  private apiService = inject(ApiService)

  email = new FormControl<string>('', {nonNullable: true})

  isDisabled(){
    return !this.email.value
  }

  submit(event: Event){
    event.preventDefault()
    this.apiService.signUp(this.email.value).subscribe()
  }
}
