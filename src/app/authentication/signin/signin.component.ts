import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import {AuthService} from 'src/app/core/service/auth.service';
import {Role} from 'src/app/core/models/role';
import {UnsubscribeOnDestroyAdapter} from 'src/app/shared/UnsubscribeOnDestroyAdapter';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent
    extends UnsubscribeOnDestroyAdapter
    implements OnInit {
    authForm!: UntypedFormGroup;
    submitted = false;
    loading = false;
    error = '';
    hide = true;

    constructor(
        private formBuilder: UntypedFormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) {
        super();
    }

    ngOnInit() {
        this.authForm = this.formBuilder.group({
            email: ['admin@admin.com', Validators.required],
            password: ['admin', Validators.required],
        });
    }

    get f() {
        return this.authForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        this.loading = true;
        this.error = '';
        if (this.authForm.invalid) {
            this.error = 'email and Password not valid !';
            return;
        } else {
            console.log('login')
            this.subs.sink = this.authService
                .login(this.f['email'].value, this.f['password'].value)
                .subscribe(
                    {
                        next: (res) => {
                            const role = this.authService.currentUserValue.role;
                            if (role === Role.Admin) {
                                this.router.navigate(['/admin/dashboard/main']);
                            } else if (role === Role.Doctor) {
                                this.router.navigate(['/doctor/dashboard']);
                            }
                            this.loading = false;
                        },
                        error: (error) => {
                            this.error = error;
                            this.submitted = false;
                            this.loading = false;
                        }
                    }
                );
        }
    }
}
