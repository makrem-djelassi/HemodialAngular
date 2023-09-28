import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { PatientService } from "../../patient.service";
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from "@angular/forms";
import { Patient } from "../../../../../core/models/patient";

@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  patientForm: UntypedFormGroup;
  patient: Patient;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public patientService: PatientService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = data.patient.nom + ' ' + data.patient.prenom;
      this.patient = data.patient;
    } else {
      this.dialogTitle = "New Patient";
      this.patient = new Patient({});
    }
    this.patientForm = this.createContactForm();
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
      id: [this.patient.id],
      prenom: [this.patient.prenom],
      nom: [this.patient.nom],
      civlite: [this.patient.civlite],
      createDateTime: [this.patient.createDateTime],
      caisse: [this.patient.caisse],
      numeroAssurePrefix: [this.patient.numeroAssurePrefix],
      numeroAssureSuffix: [this.patient.numeroAssureSuffix],
      type: [this.patient.type],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.patientService.addPatient(this.patientForm.getRawValue());
  }
}
