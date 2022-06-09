import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder } from '@angular/forms';



import { Router } from '@angular/router';
import { InicioSesionService } from 'src/app/servicios/inicio-sesion.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  formularioUsuarios:FormGroup;

  formularioRegistro:FormGroup;

  usuarios:any;
  encontrado:any;

  constructor(public formulario:FormBuilder,
    public formularioRe:FormBuilder,
    private inicioService:InicioSesionService,
    private ruteador:Router) { 


      this.formularioUsuarios = this.formulario.group({
        usuario:[''],
        contraseña:[''],
        tipo:['']
      });

      this.formularioRegistro = this.formularioRe.group({
        usuario:[''],
        contraseña:[''],
        repiteContraseña:['']
      });
    }

  

  ngOnInit(): void {


    if(sessionStorage.getItem("sesion") == "OK"){

      this.ruteador.navigateByUrl("/inicio");

    }
  }

  enviarDatos():any{

    console.log("Me pulsaste");
    console.log(this.formularioUsuarios.value.contraseña);

    this.inicioService.ObtenerUsuarios().subscribe(respuesta=>{

     

     this.usuarios = respuesta;
     var usuario = this.formularioUsuarios.value.usuario;
     var contra = this.formularioUsuarios.value.contraseña;
     console.log(this.usuarios);
     var encontrado = false;
      var rol;
     for(var i = 0; i < this.usuarios.length && encontrado==false;i++){
      console.log(this.usuarios[i].USUARIO);
      console.log(this.usuarios[i].CONTRASEÑA);
      if(this.usuarios[i].USUARIO == usuario && this.usuarios[i].CONTRASEÑA == contra){

        encontrado = true;
        rol = this.usuarios[i].ROL;
      }

      console.log(encontrado);
     }

     if(encontrado == true){

      sessionStorage.setItem("sesion","OK");
      sessionStorage.setItem("usuario",this.formularioUsuarios.value.usuario);
      sessionStorage.setItem("rol",rol);
      window.location.href = "http://localhost:4200/";
      //this.ruteador.navigateByUrl('/inicio');
     }else{
       alert("El usuario no existe");
      window.location.href = "http://localhost:4200/iniciarSesion";
      //this.ruteador.navigateByUrl('/iniciarSesion');
     }

      
    });

    

  }


  enviarDatosRegistro():any{

     console.log("pulsaste registro");
    console.log(this.formularioRegistro.value);
    var formulario = this.formularioRegistro.value;

    if(formulario.contraseña != formulario.repiteContraseña){
      alert("Las contraseñas no coinciden");
    }else{


      this.inicioService.ObtenerUsuarios().subscribe(respuesta=>{
        
        this.usuarios = respuesta; 
        console.log(this.usuarios);

        var encontrado = false;
        
        
        for(var i = 0; i < this.usuarios.length && encontrado == false; i++){

          if(this.usuarios[i].USUARIO == formulario.usuario){
            encontrado = true;
            
          }

          console.log(encontrado);
        }
          

        if(encontrado == false){
          
          this.inicioService.AgregarUsuario(formulario).subscribe(respuesta=>{

            alert("Usuario Registrado!!");

            sessionStorage.setItem("sesion","OK");
            sessionStorage.setItem("usuario",formulario.usuario);
            sessionStorage.setItem("rol","usuario");
            window.location.href = "http://localhost:4200/";
          });

        }else{
          alert("El usuario ya existe");
        }
      
      });
    } 

    

    

  }

}
