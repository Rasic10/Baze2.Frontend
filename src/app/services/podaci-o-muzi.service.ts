import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PodaciOMuzi } from "../models/podaci-o-muzi";

@Injectable()
export class PodaciOMuziService {
    constructor(private http: HttpClient) {}

    get(): Observable<PodaciOMuzi[]> {
        return this.http.get<PodaciOMuzi[]>(`https://localhost:5001/api/podaciomuzi`);
    }

    // getById(id: number): Observable<Mlekara> {
    //     return this.http.get<Mlekara>(`https://localhost:5001/api/mlekara/${id}`);
    // }

    post(podaciOMuzi: PodaciOMuzi): Observable<PodaciOMuzi> {
        return this.http.post<PodaciOMuzi>(`https://localhost:5001/api/podaciomuzi`, podaciOMuzi);
    }

    // put(mlekara: Mlekara): Observable<Mlekara> {
    //     return this.http.put<Mlekara>(`https://localhost:5001/api/mlekara`, mlekara);
    // }

    // delete(id: number) {
    //     return this.http.delete<void>(`https://localhost:5001/api/mlekara/${id}`);
    // }
}