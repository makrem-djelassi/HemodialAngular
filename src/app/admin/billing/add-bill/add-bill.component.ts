import { Component } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-bill",
  templateUrl: "./add-bill.component.html",
  styleUrls: ["./add-bill.component.sass"],
})
export class AddBillComponent {
  billForm: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder) {
    this.billForm = this.fb.group({
      id: ["", [Validators.required]],
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
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
      Date: ["", [Validators.required]],
      total: [""],
    });
  }
  onSubmit() {
    console.log("Form Value", this.billForm.value);
  }
}
