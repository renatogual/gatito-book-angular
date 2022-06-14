import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  private baseUrl = 'http://localhost:3000'

  authenticate(userName: string, password: string): Observable<HttpResponse<any>> {
    return this.http
      .post(`${this.baseUrl}/user/login`, {
        userName,
        password,
      }, { observe: 'response' })
      .pipe(
        tap((response) => {
          const authToken = response.headers.get('x-access-token') ?? ''

          this.userService.saveToken(authToken)
        })
      )
  }
}
