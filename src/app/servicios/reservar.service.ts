import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from './Reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservarService {

  API: string="http://localhost/manchesterPitiPHPs/manchesterPitiPHPs/reserva.php";

  constructor(private clienteHttp:HttpClient) { }


  ObtenerCampo(id:any):Observable<any>{


    return this.clienteHttp.get(this.API + "?consultar="+ id);
  }

  Reservar(id:any,datosReserva:Reserva):Observable<any>{


    return this.clienteHttp.post(this.API + "?reservar=" + id, datosReserva);
  }
}
