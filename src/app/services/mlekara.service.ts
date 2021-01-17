import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Mlekara } from "../models/mlekara";

@Injectable()
export class MlekaraService {
    constructor(private http: HttpClient) {}

    get(): Observable<Mlekara[]> {
        return this.http.get<Mlekara[]>(`https://localhost:5001/api/mlekara`);
    }

    getById(id: number): Observable<Mlekara> {
        return this.http.get<Mlekara>(`https://localhost:5001/api/mlekara/${id}`);
    }

    post(mlekara: Mlekara): Observable<Mlekara> {
        return this.http.post<Mlekara>(`https://localhost:5001/api/mlekara`, mlekara);
    }

    put(mlekara: Mlekara): Observable<Mlekara> {
        return this.http.put<Mlekara>(`https://localhost:5001/api/mlekara`, mlekara);
    }

    delete(id: number) {
        return this.http.delete<void>(`https://localhost:5001/api/mlekara/${id}`);
    }
}