import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dias } from '../entidades/dias';

@Injectable({
  providedIn: 'root',
})
export class DiasService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlAPI}festivos/obtenerTodos/2023`;
  }

  public listar(): Observable<Dias[]>{
    let urlT = `${this.url}`;
    return this.http.get<Dias[]>(urlT);
  }
}
