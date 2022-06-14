import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/auth/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user$ = this.userService.returnUser() // $ => convenção de que a variável retorna um Observable

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  logout() {
    this.userService.logout()
    this.router.navigate([''])
  }
}
