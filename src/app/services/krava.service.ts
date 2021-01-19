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

    getKrava(): Observable<Krava[]> {
        return this.http.get<Krava[]>(`https://localhost:5001/api/krava/krava`);
    }

    getBik(): Observable<Krava[]> {
        return this.http.get<Krava[]>(`https://localhost:5001/api/krava/bik`);
    }

    getById(id: number): Observable<Krava> {
        return this.http.get<Krava>(`https://localhost:5001/api/krava/${id}`);
    }

    post(krava: Krava): Observable<Krava> {
        console.log("asd" + krava);
        return this.http.post<Krava>(`https://localhost:5001/api/krava`, krava);
    }

    put(krava: Krava): Observable<Krava> {
        console.log("asd" + krava);
        return this.http.put<Krava>(`https://localhost:5001/api/krava`, krava);
    }

    // delete(id: number) {
    //     return this.http.delete<void>(`https://localhost:5001/api/mlekara/${id}`);
    // }
}