import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertComponent } from '../../components/alert/alert.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [ReactiveFormsModule, AlertComponent, ButtonComponent],
  templateUrl: './sign-up-page.component.html'
})
export class SignUpPageComponent {
  private apiService = inject(ApiService)

  email = new FormControl<string>('', {nonNullable: true, validators: [Validators.email]})

  apiProgress: boolean = false;

  successMessage: string = ''
  errorMessage: string = ''

  errors: { email: string} | undefined;

  constructor(){
    this.email.valueChanges.subscribe(() => {
      this.errors = undefined
    })
  }

  get emailError(){
    if(this.email.errors && (this.email.touched || this.email.dirty)) {
      return "Invalid email"
    }
    return this.errors?.email
  }

  isDisabled(){
    return !this.email.value || !this.email.valid
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
