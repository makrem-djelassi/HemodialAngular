import {Patient} from "./patient";
import {TypePec} from "./typePec";

export class PriseEnCharge {
    id!: number;
    createDateTime!: Date;
    updateDateTime!: Date;
    nom!: string;
    codeBureau!: string;
    annee!: string;
    pec!: string;
    typePec !: TypePec;
    patient!: Patient;
}
