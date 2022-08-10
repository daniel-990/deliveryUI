import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  user:Usuario[] = [];

  constructor(private httpClient: HttpClient) { }

  getUsuario() : Observable<Usuario[]>
  {
    let response = this.httpClient.get('https://localhost:7005/api/Cliente')
      .pipe(map((usuario:any) => usuario));
      return response;
  }
  createUsuario(usuario:Usuario): Observable<any>{
    let response = this.httpClient.post('https://localhost:7005/api/Cliente', usuario);
      return response;
  }
}
