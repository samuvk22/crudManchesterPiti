import { Component, OnInit } from '@angular/core';


import { NoticiasService } from 'src/app/servicios/noticias.service';

@Component({
  selector: 'app-listar-noticias',
  templateUrl: './listar-noticias.component.html',
  styleUrls: ['./listar-noticias.component.css']
})
export class ListarNoticiasComponent implements OnInit {


  Noticias:any;

  constructor(
    private noticiasService:NoticiasService 
  ) { }

  ngOnInit(): void {

    this.noticiasService.ObtenerNoticias().subscribe(respuesta=>{
      console.log(respuesta);

      this.Noticias = respuesta;
    });
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);

    if(window.confirm("¿Desea borrar este campo?")){
      this.noticiasService.BorrarNoticia(id).subscribe((respuesta=>{
        this.Noticias.splice(iControl,1);
      }));
    }
    
  }

}
