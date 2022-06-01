import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campo } from './Campo';

@Injectable({
  providedIn: 'root'
})
export class CamposServiceService {


  API: string="http://localhost/manchesterPitiPHPs/manchesterPitiPHPs/index.php";

  constructor(private clienteHttp:HttpClient) { }


  AgregarCampo(datosCampo:Campo):Observable<any>{


    return this.clienteHttp.post(this.API + "?insertar=1", datosCampo);
  }

  ObtenerCampos(){

    return this.clienteHttp.get(this.API);
  }


  BorrarCampo(id:any):Observable<any>{


    return this.clienteHttp.get(this.API + "?borrar="+ id);
  }

  ObtenerCampo(id:any):Observable<any>{


    return this.clienteHttp.get(this.API + "?consultar="+ id);
  }

  EditarCampo(id:any,datosCampo:Campo):Observable<any>{


    return this.clienteHttp.post(this.API + "?actualizar=" + id, datosCampo);
  }
}
