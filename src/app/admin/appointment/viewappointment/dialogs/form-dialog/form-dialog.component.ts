import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { AppointmentService } from "../../appointment.service";
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from "@angular/forms";
import { Appointment } from "../../appointment.model";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { formatDate } from "@angular/common";
import {SelectionModel} from "@angular/cdk/collections";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}],
})

export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  appointmentForm: UntypedFormGroup;
  appointment: Appointment;

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public appointmentService: AppointmentService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      console.log(data.appointment.date1);
      console.log(data.appointment.s1);
      this.dialogTitle = data.appointment.name;
      this.appointment = data.appointment;
    } else {
      this.dialogTitle = "New Appointment";
      this.appointment = new Appointment({});
    }
    this.appointmentForm = this.createContactForm();
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
      id: [this.appointment.id],
      img: [this.appointment.img],
      name: [this.appointment.name],
      type: [this.appointment.type],
      civlite: [this.appointment.civlite],
      annee: [this.appointment.annee],
      mois: [this.appointment.mois],
      date1: [this.appointment.date1],
      s1: [this.appointment.s1],
      date2: [this.appointment.date2],
      s2: [this.appointment.s2],
      date3: [this.appointment.date3],
      s3: [this.appointment.s3],
      date4: [this.appointment.date4],
      s4: [this.appointment.s4],
      date5: [this.appointment.date5],
      s5: [this.appointment.s5],
      date6: [this.appointment.date6],
      s6: [this.appointment.s6],
      date7: [this.appointment.date7],
      s7: [this.appointment.s7],
      date8: [this.appointment.date8],
      s8: [this.appointment.s8],
      date9: [this.appointment.date9],
      s9: [this.appointment.s9],
      date10: [this.appointment.date10],
      s10: [this.appointment.s10],
      date11: [this.appointment.date11],
      s11: [this.appointment.s11],
      date12: [this.appointment.date12],
      s12: [this.appointment.s12],
      date13: [this.appointment.date13],
      s13: [this.appointment.s13],
      date14: [this.appointment.date14],
      s14: [this.appointment.s14],

    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.appointmentService.addAppointment(this.appointmentForm.getRawValue());
  }
}
