import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from 'rxjs';
import { Client } from './client.mode';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private URI_BASE = "http://localhost:3000";
    private URI_IGBE = "https://servicodados.ibge.gov.br/api/v1";

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string): void {
        this.snackBar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top"
        })
    }

    create(client: Client): Observable<Client> {
        return this.http.post<Client>(`${this.URI_BASE}/clients`, client);
    }

    read(): Observable<Client[]> {
        return this.http.get<Client[]>(`${this.URI_BASE}/clients/`)
    }

    readById(id: string): Observable<Client> {
        return this.http.get<Client>(`${this.URI_BASE}/clients/${id}`)
    }

    update(client: Client): Observable<Client> {
        return this.http.put<Client>(`${this.URI_BASE}/clients/${client.id}`, client)
    }

    delete(id: string): Observable<Client> {
        return this.http.delete<Client>(`${this.URI_BASE}/clients/${id}`)
    }

    getSates(): Observable<any> {
        return this.http.get(`${this.URI_IGBE}/localidades/estados`)
    }

    getCitys(uf: string): Observable<any> {
        return this.http.get(`${this.URI_IGBE}/localidades/estados/${uf}/municipios`)
    }

    getCep(cep: number): Observable<any> {
        return this.http.get(`http://viacep.com.br/ws/${cep}/json/`)
    }

}
