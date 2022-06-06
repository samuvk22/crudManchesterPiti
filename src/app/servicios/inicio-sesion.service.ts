import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './Usuario';


@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {


  API = "http://localhost/manchesterPitiPHPs/manchesterPitiPHPs/iniciodeSesion.php";

  constructor(private clienteHttp:HttpClient) { }


  ObtenerUsuarios(){

    return this.clienteHttp.get(this.API);
  }
}
