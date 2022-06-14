import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CamposServiceService } from 'src/app/servicios/campos-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-campo',
  templateUrl: './agregar-campo.component.html',
  styleUrls: ['./agregar-campo.component.css']
})
export class AgregarCampoComponent implements OnInit {


   formularioCampos:FormGroup;
   campos:any;

  constructor(public formulario:FormBuilder,
      private camposServiceService:CamposServiceService,
      private ruteador:Router
    ) { 




    this.formularioCampos = this.formulario.group({
      nombre:[''],
      direccion:[''],
      tipo:[''],
      imagen:['']
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
    console.log(this.formularioCampos.value);


    this.camposServiceService.ObtenerCampos().subscribe(respuesta=>{

      this.campos = respuesta;
      


      var encontrado = false;

      for(var i = 0; i < this.campos.length;i++){

        
         if(this.formularioCampos.value.idcampo == this.campos[i].ID_CAMPO ){
          encontrado = true;
        } 

      }

      if(encontrado == true){
        alert("El campo ya existe ya existe!!!!");
        this.ruteador.navigateByUrl("/listar-campos");
      }else{
        this.camposServiceService.AgregarCampo(this.formularioCampos.value).subscribe(respuesta=>{
          alert("El campo ha sido agregado con exito");
          this.ruteador.navigateByUrl('/listar-campos');
        });
      }

    });

    

    

  }

}
