import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.pattern(/(?=.*\d)(?=.*[a-zA-Z_.]).+/),
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(16),
    ]),
    checked: new FormControl(false, Validators.required),
    birthday: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    bio: new FormControl(''),
  });

  emailErrorText: string;
  signupDisabled: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  handleSignUpForm(): void {
    this.signupDisabled = true;
    this.auth.createUser(this.signupForm.value).subscribe({
      next: () => {
        const toUrl = this.auth.redirectUrl || '/';
        this.router.navigate([toUrl]);
      },
      error: (err) => {
        this.signupForm.reset();
        this.emailErrorText = err.error;
        this.signupDisabled = false;
      },
    });
  }
}
