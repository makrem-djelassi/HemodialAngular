import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {AuthService} from "../../core/service/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  authForm!: UntypedFormGroup;
  submitted = false;
  returnUrl!: string;
  error = '';
  message = '';

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.authForm.controls;
  }

  onSubmit() {
    this.error = '';
    this.message = '';
    this.submitted = true;

    if (this.authForm.invalid) {
      return;
    } else {
      this.authService.sendResetPasswordRequest(this.authForm.value.email).subscribe({
        next: () => {
          this.message = 'Request sent! please check your email';
          return;
        },
        error: (err) => {
          if (err.status === 404) {
            this.error = err.message;
          } else {
            this.error = 'Error occured please try later';
          }
          return;
        }
      })
    }
  }
}
