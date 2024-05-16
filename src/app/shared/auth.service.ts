import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

type User = {
  id: number;
  name: string;
  handle: string;
  email: string;
  image: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>({
    id: 0,
    name: '',
    handle: '',
    email: '',
    image: null,
  });

  constructor(private httpClient: HttpClient) {
    const storedData = localStorage.getItem('auth');
    if (storedData) {
      try {
        this.user.next(JSON.parse(storedData));
      } catch {}
    }

    this.user.subscribe((data) => {
      localStorage.setItem('auth', JSON.stringify(data));
    });
  }

  auth(token: string, operation: string) {
    return this.httpClient
      .post<User>('/api/auth', {
        token,
        operation,
      })
      .pipe(tap((data) => this.user.next(data)));
  }

  logout() {
    return this.httpClient.post('/api/auth/logout', {}).pipe(
      tap({
        finalize: () =>
          this.user.next({
            id: 0,
            name: '',
            handle: '',
            email: '',
            image: null,
          }),
      })
    );
  }

  updateUser(name: string, image: string | null) {
    this.user.next({
      ...this.user.value,
      name,
      image,
    });
  }
}
