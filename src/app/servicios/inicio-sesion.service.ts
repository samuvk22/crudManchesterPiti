import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario} from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {


  APIsesion = "http://localhost/manchesterPitiPHPs/manchesterPitiPHPs/iniciodeSesion.php";
  APIregistro = "http://localhost/manchesterPitiPHPs/manchesterPitiPHPs/registro.php";

  constructor(private clienteHttp:HttpClient) { }


  ObtenerUsuarios(){

    return this.clienteHttp.get(this.APIsesion);
  }

  AgregarUsuario(datosUsuario:Usuario):Observable<any>{


    return this.clienteHttp.post(this.APIregistro + "?insertar=1", datosUsuario);
  }
}
