import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string = ''
  password: string = ''

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.authenticate(this.user, this.password).subscribe({
      next: (result) => this.router.navigate(['animals']),
      error: (error) => console.log('login error', error)
    })

  }
}
