import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.sass'],
})
export class BookappointmentComponent {
  bookingForm: UntypedFormGroup;
  hide3 = true;
  agree3 = false;
  isDisabled = true;
  constructor(private fb: UntypedFormBuilder) {
    this.bookingForm = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      date1: ['', [Validators.required]],
      date2: ['', [Validators.required]],
      date3: ['', [Validators.required]],
      date4: ['', [Validators.required]],
      date5: ['', [Validators.required]],
      date6: ['', [Validators.required]],
      date7: ['', [Validators.required]],
      date8: ['', [Validators.required]],
      date9: ['', [Validators.required]],
      date10: ['', [Validators.required]],
      date11: ['', [Validators.required]],
      date12: ['', [Validators.required]],
      date13: ['', [Validators.required]],
      date14: ['', [Validators.required]],
    });
  }
  onSubmit() {
    console.log('Form Value', this.bookingForm.value);
  }

  get f() {
    return this.bookingForm.controls;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.bookingForm.patchValue({
        fileSource: file,
      });
    }
  }
}
