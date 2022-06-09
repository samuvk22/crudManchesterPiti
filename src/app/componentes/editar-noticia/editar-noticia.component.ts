import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NoticiasService } from 'src/app/servicios/noticias.service';

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.css']
})
export class EditarNoticiaComponent implements OnInit {

  formularioNoticias:FormGroup;
  elID:any;

  constructor(private activeRoute:ActivatedRoute,
    private noticiasService:NoticiasService,
    public formulario:FormBuilder,
    private ruteador:Router) {
      this.elID= this.activeRoute.snapshot.paramMap.get('id');
      console.log(this.elID);

      this.noticiasService.ObtenerNoticia(this.elID).subscribe(
        respuesta=>{
          console.log(respuesta);
          this.formularioNoticias.setValue({
            titulo:respuesta[0]['TITULO'],
            descripcion:respuesta[0]['DESCRIPCION'],
            usuario:respuesta[0]['USUARIO']
          });
        }
      );

      this.formularioNoticias = this.formulario.group({
        titulo:[''],
        descripcion:[''],
        usuario:['']
      });
     }

  ngOnInit(): void {

    if( sessionStorage.getItem("rol") != 'admin'){

      console.log("no eres admin");
      this.ruteador.navigateByUrl("/iniciarSesion");
    }
  }


  enviarDatos():any{
    
    console.log(this.elID);
    console.log(this.formularioNoticias.value);


    this.noticiasService.EditarNoticia(this.elID,this.formularioNoticias.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-noticias');
    });
    
  }

}
