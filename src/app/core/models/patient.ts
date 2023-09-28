import {Civilite} from "./civilite";
import {EtatPatient} from "./etatPatient";
import {Clinique} from "./clinique";
import {Caisse} from "./caisse";
import {TypePatient} from "./typePatient";
import {PriseEnCharge} from "./priseEnCharge";

export class Patient{
    id!: number;
    createDateTime!: Date;
    updateDateTime!: Date;
  civlite!: Civilite;
  nom!: string;
  prenom!: string;
  numeroAssurePrefix!: string;
  numeroAssureSuffix!: string;
  type!: TypePatient;
  etat!: EtatPatient;
  clinique!: Clinique;
  caisse!: Caisse;
  priseEnCharges!: PriseEnCharge[];

  constructor(patient: any) {
    {
      this.id = patient.id ||'';
      this.createDateTime = patient.createDateTime ||'';
      this.updateDateTime = patient.updateDateTime ||'';
      this.civlite = patient.civlite ||'';
      this.nom = patient.nom ||'';
      this.prenom = patient.prenom ||'';
      this.numeroAssurePrefix = patient.numeroAssurePrefix ||'';
      this.numeroAssureSuffix = patient.numeroAssureSuffix ||'';
      this.type = patient.type ||'';
      this.etat = patient.etat ||'';
      this.clinique = patient.clinique ||'';
      this.caisse = patient.caisse ||'';
    }
  }

}
