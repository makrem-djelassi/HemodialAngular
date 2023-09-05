import {Clinique} from "./clinique";

export class Banque{
  id!: number;
  createDateTime!: Date;
  updateDateTime!: Date;
  nom!: string;
  rib!: string;
  clinique!: Clinique;
}
