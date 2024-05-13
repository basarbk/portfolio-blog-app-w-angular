import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

type User = {
  id: number;
  name: string;
  handle: string;
  email: string;
  image: string | null
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>({
    id: 0,
    name: '',
    handle: '',
    email: '',
    image: null,
  })

  constructor(private httpClient: HttpClient) { }

  auth(token: string, operation: string) {
    return this.httpClient.post<User>('/api/auth', {
      token,
      operation
    }).pipe(tap((data) => this.user.next(data)))
  }
}
