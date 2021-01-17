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

    // getById(id: number): Observable<Mlekara> {
    //     return this.http.get<Mlekara>(`https://localhost:5001/api/mlekara/${id}`);
    // }

    // post(mlekara: Mlekara): Observable<Mlekara> {
    //     return this.http.post<Mlekara>(`https://localhost:5001/api/mlekara`, mlekara);
    // }

    // put(mlekara: Mlekara): Observable<Mlekara> {
    //     return this.http.put<Mlekara>(`https://localhost:5001/api/mlekara`, mlekara);
    // }

    // delete(id: number) {
    //     return this.http.delete<void>(`https://localhost:5001/api/mlekara/${id}`);
    // }
}