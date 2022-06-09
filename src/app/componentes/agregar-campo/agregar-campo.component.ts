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

  constructor(public formulario:FormBuilder,
      private camposServiceService:CamposServiceService,
      private ruteador:Router
    ) { 




    this.formularioCampos = this.formulario.group({
      nombre:[''],
      direccion:[''],
      tipo:['']
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

    this.camposServiceService.AgregarCampo(this.formularioCampos.value).subscribe(respuesta=>{

      this.ruteador.navigateByUrl('/listar-campos');
    });

    

  }

}
