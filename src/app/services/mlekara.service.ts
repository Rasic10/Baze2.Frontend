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
}