import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Chamado } from './chamado.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Chamado[]> {
    const url = `${this.baseUrl}/chamados/todos`;
    return this.http.get<Chamado[]>(url)
      .pipe(
        map(response => response as Chamado[])
      );
  }
}