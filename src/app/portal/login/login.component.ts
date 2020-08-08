import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  emailErrorMessage: string;
  passwordErrorMessage: string;
  hidePassword: boolean = true;
  loginDisabled: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  handleLoginForm(): void {
    this.loginDisabled = true;
    this.auth.verifyUser(this.loginForm.value).subscribe({
      next: () => {
        const toUrl = this.auth.redirectUrl || '/';
        this.router.navigate([toUrl]);
      },
      error: (err) => {
        this.emailErrorMessage = err.errors.hasOwnProperty('email')
          ? err.errors.email
          : '';
        this.passwordErrorMessage = err.errors.hasOwnProperty('password')
          ? err.errors.password
          : '';
        this.loginDisabled = false;
      },
    });
  }
}
