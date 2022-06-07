import { Component, OnInit } from '@angular/core';

import { CamposServiceService } from 'src/app/servicios/campos-service.service';

@Component({
  selector: 'app-listar-campo',
  templateUrl: './listar-campo.component.html',
  styleUrls: ['./listar-campo.component.css']
})
export class ListarCampoComponent implements OnInit {

  Campos:any;
  constructor(
    private camposServiceService:CamposServiceService 
  ) {

    
   }

  ngOnInit(): void {
    this.camposServiceService.ObtenerCampos().subscribe(respuesta=>{

      console.log(respuesta);

      this.Campos=respuesta;
    });

     const admin = document.getElementsByClassName("admin");
    

     
    /* let admin = document.querySelectorAll("admin");
    //const admin = document.querySelectorAll("#admin");


    if(sessionStorage.getItem("sesion") == "OK" && sessionStorage.getItem("rol") == "admin"){


     for(var i = 0; i < admin.length; i++){
      admin[i].classList.add('ve');
      console.log("cambiando propiedad");
     }


    }else{

      for(var i = 0; i < admin.length; i++){
        admin[i].classList.add('nove');
        console.log("cambiando propiedad");
       }

    } */
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);

    if(window.confirm("¿Desea borrar este campo?")){
      this.camposServiceService.BorrarCampo(id).subscribe((respuesta=>{
        this.Campos.splice(iControl,1);
      }));
    }
    
  }

}
