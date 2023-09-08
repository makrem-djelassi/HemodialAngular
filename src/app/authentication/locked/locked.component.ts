import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {AuthService} from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-locked',
  templateUrl: './locked.component.html',
  styleUrls: ['./locked.component.scss'],
})
export class LockedComponent implements OnInit {
  authForm!: UntypedFormGroup;
  submitted = false;


  hide = true;
  resetToken: string;
  error = '';

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {
    this.resetToken = this.activatedRoute.snapshot.paramMap.get('token') || '';
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.authForm.controls;
  }

  onSubmit() {
    this.error = '';
    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    } else {
      this.authService.resetPassword(this.resetToken, this.authForm.value.password)
        .subscribe({
          next: () => {
            this.router.navigate(['/authentication/signin']);
          }, error: (error) => {
            console.log(error.status);
            if (error.status === 400) {
              this.error = 'Invalid token';
            }else {
              this.error = 'Error occured please try again later'
            }
            return;
          }
        })
    }
  }
}
