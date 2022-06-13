import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  baseUrl: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  createUser(user: NewUser) {
    return this.http.post(`${this.baseUrl}/user/signup`, user);
  }
}
