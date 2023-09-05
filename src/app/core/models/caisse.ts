import {Patient} from "./patient";

export class Caisse{
  id!: number;
  createDateTime!: Date;
  updateDateTime!: Date;
  code!: string;
  label!: string;
  patient!: Patient[];
}
