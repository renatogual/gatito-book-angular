import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NewUserService } from './new-user.service';

import { NewUser } from './new-user';
import { Tiny } from 'src/app/utils/tiny.validator';
import { UserSamePasswordValidator } from 'src/app/utils/user-same-password.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [Tiny]],
      password: ['']
    }, {
      validators: [UserSamePasswordValidator]
    })
  }

  register() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser
      this.newUserService.createUser(newUser).subscribe({
        next: () => this.router.navigate(['/login']),
        error: (error) => console.log(error)
      })

    }
  }

}
