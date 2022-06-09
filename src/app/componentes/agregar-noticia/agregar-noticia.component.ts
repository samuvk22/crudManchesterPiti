import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder } from '@angular/forms';



import { Router } from '@angular/router';
import { NoticiasService } from 'src/app/servicios/noticias.service';

@Component({
  selector: 'app-agregar-noticia',
  templateUrl: './agregar-noticia.component.html',
  styleUrls: ['./agregar-noticia.component.css']
})
export class AgregarNoticiaComponent implements OnInit {

  formularioNoticias:FormGroup;

  constructor(public formulario:FormBuilder,
    private noticiasService:NoticiasService,
    private ruteador:Router) { 


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

    console.log("Me pulsaste");
    console.log(this.formularioNoticias.value);

    this.noticiasService.AgregarNoticia(this.formularioNoticias.value).subscribe(respuesta=>{

      this.ruteador.navigateByUrl('/listar-noticias');
    });

    

  }

}
