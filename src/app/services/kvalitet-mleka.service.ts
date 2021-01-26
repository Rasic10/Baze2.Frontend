import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { KvalitetMleka } from "../models/kvalitet-mleka";

@Injectable()
export class KvalitetMlekaService {
    constructor(private http: HttpClient) {}

    get(): Observable<KvalitetMleka[]> {
        return this.http.get<KvalitetMleka[]>(`https://localhost:5001/api/kvalitetmleka`);
    }

    getById(date: Date): Observable<KvalitetMleka> {
        return this.http.get<KvalitetMleka>(`https://localhost:5001/api/kvalitetmleka/${date}`);
    }

    post(KvalitetMleka: KvalitetMleka): Observable<KvalitetMleka> {
        return this.http.post<KvalitetMleka>(`https://localhost:5001/api/kvalitetmleka`, KvalitetMleka);
    }

    put(KvalitetMleka: KvalitetMleka): Observable<KvalitetMleka> {
        return this.http.put<KvalitetMleka>(`https://localhost:5001/api/kvalitetmleka`, KvalitetMleka);
    }

    // delete(id: number) {
    //     return this.http.delete<void>(`https://localhost:5001/api/mlekara/${id}`);
    // }
}