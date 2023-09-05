import { Role } from './role';
import { Civilite } from './civilite'

export class User {
  id!: number;
  createDateTime!: Date;
  updateDateTime!: Date;
  img!: string;
  username!: string;
  password!: string;
  prenom!: string;
  nom!: string;
  role!: Role;
  token!: string;
  email!: string
  dateNaissance!: Date
  civlite!: Civilite
  phone!: number
  resetPasswordToken!: string
}
