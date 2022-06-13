import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plantilla } from './Plantilla';

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {

  API: string="http://localhost/manchesterPitiPHPs/manchesterPitiPHPs/plantilla.php";

  constructor(private clienteHttp:HttpClient) { }

  AgregarJugador(datosPlantilla:Plantilla):Observable<any>{
  return this.clienteHttp.post(this.API+"?insertar=1", datosPlantilla);
  }

  ObtenerPlantilla(){
    return this.clienteHttp.get(this.API);
  }

  BorrarJugador(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
    }

    ObtenerJugador(id:any):Observable<any>{
      return this.clienteHttp.get(this.API+"?consultar="+id);
    }

    EditarJugador(id:any,datosPlantilla:any):Observable<any>{
      return this.clienteHttp.post(this.API+"?actualizar="+id, datosPlantilla);
    }

}
