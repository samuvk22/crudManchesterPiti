import { Component, OnInit } from '@angular/core';

import { NoticiasService } from 'src/app/servicios/noticias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-publicaciones',
  templateUrl: './mis-publicaciones.component.html',
  styleUrls: ['./mis-publicaciones.component.css']
})
export class MisPublicacionesComponent implements OnInit {

  misNoticias:any;

  constructor(private noticiasService:NoticiasService,
    private ruteador:Router) { }

  ngOnInit(): void {

    if( sessionStorage.getItem("sesion") != 'OK'){

      alert("Para ver tus publicaciones debes iniciar sesion!!!!");
      this.ruteador.navigateByUrl("/iniciarSesion");
     
    }
    this.noticiasService.ObtenerMisNoticias().subscribe(respuesta=>{

      console.log(respuesta);

      this.misNoticias=respuesta;
    });
  }


  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);

    if(window.confirm("¿Desea borrar este campo?")){
      this.noticiasService.BorrarNoticia(id).subscribe((respuesta=>{
        this.misNoticias.splice(iControl,1);
      }));
    }
    
  }

}
