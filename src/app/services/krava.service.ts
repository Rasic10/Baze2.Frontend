import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Krava } from "../models/krava";

@Injectable()
export class KravaService {
    constructor(private http: HttpClient) {}

    get(): Observable<Krava[]> {
        return this.http.get<Krava[]>(`https://localhost:5001/api/krava`);
    }

    getById(id: number): Observable<Krava> {
        return this.http.get<Krava>(`https://localhost:5001/api/krava/${id}`);
    }

    // post(mlekara: Mlekara): Observable<Mlekara> {
    //     return this.http.post<Mlekara>(`https://localhost:5001/api/mlekara`, mlekara);
    // }

    put(krava: Krava): Observable<Krava> {
        return this.http.put<Krava>(`https://localhost:5001/api/krava`, krava);
    }

    // delete(id: number) {
    //     return this.http.delete<void>(`https://localhost:5001/api/mlekara/${id}`);
    // }
}