import { Injectable } from '@angular/core';
import { UsuarioRequest } from '../../shared/models/requests/usuario.request';

@Injectable(
  //Para que el servicio perdure en toda la pagina
  //{providedIn: "root"}
)

export class UsuarioService {

  add(request: UsuarioRequest){
    console.log('Agregando Usuario', request);
  }
  
  delete(id: number, request: UsuarioRequest){
    console.log('Eliminando Usuario ', request);
  }

} 
