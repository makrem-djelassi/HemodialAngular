import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {AuthService} from "../../core/service/auth.service";
import {DatePipe} from "@angular/common";
import {Role} from "../../core/models/role";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  authForm!: UntypedFormGroup;
  submitted = false;
  returnUrl!: string;
  hide = true;
  chide = true;
  error = '';

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private datePip: DatePipe,
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      civilite: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      phone: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    } else {
//      this.router.navigate(['/admin/dashboard/main']);
      const data = this.authForm.value;
      data.dateNaissance = this.datePip.transform(data.dateNaissance, 'yyyy-MM-dd');
      data.role = Role.Doctor
      console.log(data);
      this.authService.register(data).subscribe(
          {
            next: () => {
              this.router.navigate(['/authentication/signin']);
            },
            error: (error: any) => {
              this.error = 'User Registration error';
              return;
            }
          });    }
  }
}


