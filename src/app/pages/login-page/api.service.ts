import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  login(email: string){
    return this.httpClient.post<{message: string}>('/api/auth/login', { email })
  }
}
