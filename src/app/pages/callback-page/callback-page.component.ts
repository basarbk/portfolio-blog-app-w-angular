import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-callback-page',
  standalone: true,
  imports: [],
  templateUrl: './callback-page.component.html'
})
export class CallbackPageComponent implements OnInit{

  private route = inject(ActivatedRoute);

  private httpClient = inject(HttpClient);
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.httpClient.post('/api/auth', {
        token: queryParams['token'],
        operation: queryParams['operation']
      }).subscribe()
    })
    
  }

}
