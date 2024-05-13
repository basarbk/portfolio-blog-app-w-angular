import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  constructor() { }
}
