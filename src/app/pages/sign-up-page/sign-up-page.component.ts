import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up-page.component.html'
})
export class SignUpPageComponent {
  private apiService = inject(ApiService)

  email = new FormControl<string>('', {nonNullable: true})

  apiProgress: boolean = false;

  successMessage: string = ''
  errorMessage: string = ''

  errors: { email: string} | undefined;

  constructor(){
    this.email.valueChanges.subscribe(() => {
      this.errors = undefined
    })
  }

  isDisabled(){
    return !this.email.value || this.apiProgress
  }

  submit(event: Event){
    this.apiProgress = true
    this.successMessage = ''
    this.errorMessage = ''
    event.preventDefault()
    this.apiService.signUp(this.email.value).subscribe({
      next: (data) => {
        this.apiProgress = false
        this.successMessage = data.message
      },
      error: (httpError: HttpErrorResponse) => {
        if(httpError.status === 400) {
          this.errors = httpError.error.validationErrors
        } else {
          this.errorMessage = 'Unexpected error occurred, please try again'
        }
        this.apiProgress = false
      }
    })
  }
}
