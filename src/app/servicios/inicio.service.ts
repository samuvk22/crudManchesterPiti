import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InicioService {


  API: string="http://localhost/manchesterPitiPHPs/manchesterPitiPHPs/inicio.php";

  constructor(private clienteHttp:HttpClient) { }



  ObtenerUltimaNoticia(){

    return this.clienteHttp.get(this.API+"?ultimaNoticia=1");
  }

  ObtenerUltimoCampo(){

    return this.clienteHttp.get(this.API+"?ultimoCampo=1");
  }
}
