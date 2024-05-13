import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertComponent } from '../../components/alert/alert.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-callback-page',
  standalone: true,
  imports: [AlertComponent, SpinnerComponent],
  templateUrl: './callback-page.component.html'
})
export class CallbackPageComponent implements OnInit{

  private route = inject(ActivatedRoute);

  private authService = inject(AuthService);

  status: 'loading' | 'success' | 'fail' = 'loading'

  message = '';
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.status = 'loading'
      this.authService.auth(queryParams['token'], queryParams['operation']).subscribe({
        next: () => {
          this.status = 'success'
          this.message = 'Account is created'
        },
        error: (httpError: HttpErrorResponse) => {
          this.status = 'fail'
          if(httpError.status) {
            this.message = httpError.error.message
          } else {
            this.message = 'Unexpected error occurred, please try again'
          }
        }
      })
    })
    
  }

}
