import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Obracun } from "../models/obracun";

@Injectable()
export class ObracunService {
    constructor(private http: HttpClient) {}

    get(): Observable<Obracun[]> {
        return this.http.get<Obracun[]>(`https://localhost:5001/api/obracun`);
    }

    getById(id: number): Observable<Obracun> {
        var o = this.http.get<Obracun>(`https://localhost:5001/api/obracun/${id}`);
        console.log("Asd " + o);
        return o;
    }

    post(obracun: Obracun): Observable<Obracun> {
        return this.http.post<Obracun>(`https://localhost:5001/api/obracun`, obracun);
    }

    put(obracun: Obracun): Observable<Obracun> {
        return this.http.put<Obracun>(`https://localhost:5001/api/obracun`, obracun);
    }

    // delete(id: number) {
    //     return this.http.delete<void>(`https://localhost:5001/api/mlekara/${id}`);
    // }
}