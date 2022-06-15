import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia} from './Noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  API: string="http://localhost/manchesterPitiPHPs/manchesterPitiPHPs/noticias.php";

  constructor(private clienteHttp:HttpClient) { }



  AgregarNoticia(datosNoticia:Noticia):Observable<any>{


    return this.clienteHttp.post(this.API + "?insertar=1", datosNoticia);
  }

  ObtenerNoticia(id:any):Observable<any>{


    return this.clienteHttp.get(this.API + "?consultar="+ id);
  }


  ObtenerNoticias(){

    return this.clienteHttp.get(this.API);
  }


  BorrarNoticia(id:any):Observable<any>{


    return this.clienteHttp.get(this.API + "?borrar="+ id);
  }


  EditarNoticia(id:any,datosNoticia:Noticia):Observable<any>{


    return this.clienteHttp.post(this.API + "?actualizar=" + id, datosNoticia);
  }

  ObtenerMisNoticias():Observable<any>{


    return this.clienteHttp.get(this.API + "?obtener="+ sessionStorage.getItem("usuario"));
  }


}
