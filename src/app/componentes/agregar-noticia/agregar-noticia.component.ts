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
  noticias:any;

  constructor(public formulario:FormBuilder,
    private noticiasService:NoticiasService,
    private ruteador:Router) { 



      

      this.formularioNoticias = this.formulario.group({
        titulo:[''],
        descripcion:[''],
        usuario:[''],
        imagen:['']
      });

      this.formularioNoticias.setValue({
        titulo:'',
        descripcion:'',
        usuario:sessionStorage.getItem("usuario"),
        imagen:''
      });
      
    }

  ngOnInit(): void {

     if( sessionStorage.getItem("sesion") != 'OK'){

      alert("Para subir una noticia debes iniciar sesion!!!!");
      this.ruteador.navigateByUrl("/iniciarSesion");
     
    }
  }

  enviarDatos():any{

    console.log("Me pulsaste");
    console.log(this.formularioNoticias.value);

    this.noticiasService.ObtenerNoticias().subscribe(respuesta=>{

      this.noticias = respuesta;
      


      var encontrado = false;

      for(var i = 0; i < this.noticias.length;i++){

        
         if(this.formularioNoticias.value.idcampo == this.noticias[i].ID_NOTICIA ){
          encontrado = true;
        } 

      }

      if(encontrado == true){
        alert("La noticia ya existe!!!!");
        this.ruteador.navigateByUrl("/listar-noticias");
      }else{
        this.noticiasService.AgregarNoticia(this.formularioNoticias.value).subscribe(respuesta=>{
          alert("Noticia subida con exito!!!");
          this.ruteador.navigateByUrl('/listar-noticias');
        });
      }

    });

    

    

  }

}
