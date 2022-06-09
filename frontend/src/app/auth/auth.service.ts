import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000'

  authenticate(userName: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/login`, {
      userName,
      password,
    })
  }
}
