export class Krava {
    idZivotinje: string;
    ime: string;
    datumRodjenja: Date;
    idZivotinjeMajke: string;
    pol: Pol;
    rasa: Rasa;
    trenutnaKolicinaMleka: number;
}

export type Rasa = {
    naziv: string;
    boja: string;
}

export enum Pol {
    M = 0,
    Z = 1,
}