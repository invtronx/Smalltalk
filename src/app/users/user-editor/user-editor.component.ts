import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss'],
})
export class UserEditorComponent implements OnInit {
  editForm: FormGroup;
  currentUser: User;
  editDisabled: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { resolvedData: any }) => {
      this.currentUser = data.resolvedData.currentUser;
      this.editForm = new FormGroup({
        name: new FormControl(this.currentUser.name, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(16),
        ]),
        email: new FormControl(
          {
            value: this.currentUser.email,
            disabled: true,
          },
          Validators.required
        ),
        birthday: new FormControl(
          this.toFormDate(this.currentUser.birthday),
          Validators.required
        ),
        gender: new FormControl(this.currentUser.gender, Validators.required),
        bio: new FormControl(this.currentUser.bio),
      });
    });
  }

  toFormDate(date: string | Date): string {
    const pureDate = new Date(date);
    return pureDate.toISOString().slice(0, 10);
  }

  handleEditForm(): void {
    this.editDisabled = true;
    this.auth.updateUser(this.editForm.value).subscribe({
      next: () => {
        this.router.navigate(['/users/me']);
        console.log('Personal information Edited');
      },
      error: () => {
        console.log('Failed to edit information');
      },
    });
  }
}
