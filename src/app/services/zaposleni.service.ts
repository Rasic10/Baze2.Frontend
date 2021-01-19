import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ZaposlenDetaljno } from "../models/zaposlen-detaljno";
import { ZaposlenOsnovno } from "../models/zaposlen-osnovno";

@Injectable()
export class ZaposlenService {
    constructor(private http: HttpClient) {}

    getOsnovno(): Observable<ZaposlenOsnovno[]> {
        return this.http.get<ZaposlenOsnovno[]>(`https://localhost:5001/api/zaposlen/osnovno`);
    }

    getDetaljno(): Observable<ZaposlenDetaljno[]> {
        return this.http.get<ZaposlenDetaljno[]>(`https://localhost:5001/api/zaposlen/detaljno`);
    }

    // getById(id: number): Observable<Krava> {
    //     return this.http.get<Krava>(`https://localhost:5001/api/krava/${id}`);
    // }

    // post(mlekara: Mlekara): Observable<Mlekara> {
    //     return this.http.post<Mlekara>(`https://localhost:5001/api/mlekara`, mlekara);
    // }

    // put(krava: Krava): Observable<Krava> {
    //     return this.http.put<Krava>(`https://localhost:5001/api/krava`, krava);
    // }

    // delete(id: number) {
    //     return this.http.delete<void>(`https://localhost:5001/api/mlekara/${id}`);
    // }
}