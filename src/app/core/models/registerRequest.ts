import {Role} from "./role";
import {Civilite} from "./civilite";

export interface RegisterRequest {
    email: string,
    nom: string,
    prenom: string,
    civilite: Civilite,
    phone: string,
    dateNaissance: string,
    role: Role,
    password: string
}
