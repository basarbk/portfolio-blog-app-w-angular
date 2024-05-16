import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from './types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  fetchUser(handle: string) {
    return this.httpClient.get<Author>(`/api/users/${handle}`);
  }

  updateUser(id: number, body: { name: string; image: string | null }) {
    return this.httpClient.put<Author>(`/api/users/${id}`, body);
  }
}
