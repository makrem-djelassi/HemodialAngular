import { Role } from './role';
import { Adresse } from './adresse';
import {User} from './user';
import {EtatClinique} from "./etatClinique";
import {Patient} from "./patient";
import {Banque} from "./banque";

export class Clinique {
    id!: number;
    createDateTime!: Date;
    updateDateTime!: Date;
  codeClinique!: number;
  email!: string;
  label!: string;
  codePrestation!: number;
  bureauCaisse!: number;
  affiliationCaisse!: number;
  matriculeTva!: string;
  registreCommerce!: string;
  adresse!: Adresse;
  tel!: string;
  fax!: string;
  gerant!: User;
  medcein!: string;
  etat!: EtatClinique;
  patient!: Patient[];
  banque!: Banque[];
}
