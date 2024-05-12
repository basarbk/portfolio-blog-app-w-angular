import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  signUp(email: string){
    return this.httpClient.post<{message: string}>('/api/users', { email })
  }
}
