import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unirme } from './Unirme';

@Injectable({
  providedIn: 'root'
})
export class UnirmeService {


  API: string="http://localhost/manchesterPitiPHPs/manchesterPitiPHPs/unirme.php";

  constructor(private clienteHttp:HttpClient) { }


  EnviarCorreo(datosUnirme:Unirme):Observable<any>{


    return this.clienteHttp.post(this.API, datosUnirme);
  }
}
