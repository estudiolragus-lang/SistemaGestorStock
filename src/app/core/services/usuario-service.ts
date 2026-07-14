import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

// Tus modelos de Registro (Usuario)
import { UsuarioRequest } from '../../shared/models/requests/usuario.request';
import { UsuarioResponse } from '../../shared/models/response/usuario.response';

// TUS NUEVOS MODELOS DE LOGIN
import { LoginRequest } from '../../shared/models/requests/login.request';
import { LoginResponse } from '../../shared/models/response/login.response';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private httpClient = inject(HttpClient);
  private readonly BASE_URL = `${environment.API_URL}/Usuario`;

  // CORREGIDO: Ahora recibe LoginRequest y retorna LoginResponse
  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.BASE_URL}/login`, credentials);
  }

  getAll(): Observable<UsuarioResponse[]> {
    return this.httpClient.get<UsuarioResponse[]>(this.BASE_URL);
  }

  getById(id: number): Observable<UsuarioResponse> {
    return this.httpClient.get<UsuarioResponse>(`${this.BASE_URL}/${id}`);
  }

  add(request: UsuarioRequest): Observable<UsuarioResponse> {
    return this.httpClient.post<UsuarioResponse>(this.BASE_URL, request);
  }

  // Si quieres quitar 'any' de update/delete, puedes tipar como string si el API devuelve texto
  update(id: number, request: UsuarioRequest): Observable<string> {
    return this.httpClient.put(`${this.BASE_URL}/${id}`, request, { responseType: 'text' });
  }

  delete(id: number): Observable<string> {
    return this.httpClient.delete(`${this.BASE_URL}/${id}`, { responseType: 'text' });
  }

  // En tu UsuarioService
  vincularUsuarioAEmpresa(CodigoUnico: string): Observable<string> {
    // Nota: { CodigoUnico: ... } coincide con la clase VincularRequest en C#
    return this.httpClient.post(`${this.BASE_URL}/VincularEmpresa`,
      { CodigoUnico: CodigoUnico },
      {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'text'
      }
    );
  }
}