import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertComponent } from '../../components/alert/alert.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-callback-page',
  standalone: true,
  imports: [AlertComponent, SpinnerComponent],
  templateUrl: './callback-page.component.html'
})
export class CallbackPageComponent implements OnInit{

  private route = inject(ActivatedRoute);

  private httpClient = inject(HttpClient);

  status: 'loading' | 'success' | 'fail' = 'loading'

  message = '';
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.status = 'loading'
      this.httpClient.post('/api/auth', {
        token: queryParams['token'],
        operation: queryParams['operation']
      }).subscribe({
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
