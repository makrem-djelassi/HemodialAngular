import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { BillListService } from "../../bill-list.service";
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from "@angular/forms";
import { BillList } from "../../bill-list.model";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  billListForm: UntypedFormGroup;
  billList: BillList;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public billListService: BillListService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = data.billList.pName;
      this.billList = data.billList;
    } else {
      this.dialogTitle = "New BillList";
      this.billList = new BillList({});
    }
    this.billListForm = this.createContactForm();
  }
  formControl = new UntypedFormControl("", [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError("required")
      ? "Required field"
      : this.formControl.hasError("email")
      ? "Not a valid email"
      : "";
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.billList.id],
      img: [this.billList.img],
      name: [this.billList.name],
      type: [this.billList.type],
      civlite: [this.billList.civlite],
      annee: [this.billList.annee],
      mois: [this.billList.mois],
      date1: [this.billList.date1],
      s1: [this.billList.s1],
      date2: [this.billList.date2],
      s2: [this.billList.s2],
      date3: [this.billList.date3],
      s3: [this.billList.s3],
      date4: [this.billList.date4],
      s4: [this.billList.s4],
      date5: [this.billList.date5],
      s5: [this.billList.s5],
      date6: [this.billList.date6],
      s6: [this.billList.s6],
      date7: [this.billList.date7],
      s7: [this.billList.s7],
      date8: [this.billList.date8],
      s8: [this.billList.s8],
      date9: [this.billList.date9],
      s9: [this.billList.s9],
      date10: [this.billList.date10],
      s10: [this.billList.s10],
      date11: [this.billList.date11],
      s11: [this.billList.s11],
      date12: [this.billList.date12],
      s12: [this.billList.s12],
      date13: [this.billList.date13],
      s13: [this.billList.s13],
      date14: [this.billList.date14],
      s14: [this.billList.s14],
      NbreSeance: [this.billList.NbreSeance],
      date: [this.billList.date],
      total: [this.billList.total],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.billListService.addBillList(this.billListForm.getRawValue());
  }
}
