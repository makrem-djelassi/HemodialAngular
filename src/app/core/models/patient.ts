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
}
