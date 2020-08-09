import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup(
    {
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
      passwordConfirmation: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      bio: new FormControl(''),
    },
    { validators: this.unmatchedPasswordsValidator }
  );

  emailErrorMessage: string;
  signupDisabled: boolean = false;
  hidePassword: boolean = true;

  isSmallScreen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(
    private auth: AuthService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe('(max-width: 1320px)')
      .subscribe((state: BreakpointState) => {
        this.isSmallScreen$.next(state.matches);
      });
  }

  unmatchedPasswordsValidator(control: FormGroup): ValidationErrors | null {
    const password = control.get('password');
    const passwordConfirmation = control.get('passwordConfirmation');

    return password.value != passwordConfirmation.value
      ? { unmatchedPasswords: true }
      : null;
  }

  handleSignUpForm(): void {
    this.signupDisabled = true;
    this.auth.createUser(this.signupForm.value).subscribe({
      next: () => {
        const toUrl = this.auth.redirectUrl || '/';
        this.router.navigate([toUrl]);
      },
      error: (err) => {
        this.signupForm.reset();
        this.emailErrorMessage = err.error;
        this.signupDisabled = false;
      },
    });
  }
}
