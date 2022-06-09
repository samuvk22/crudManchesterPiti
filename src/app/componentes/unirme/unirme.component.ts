import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

import { UnirmeService } from 'src/app/servicios/unirme.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-unirme',
  templateUrl: './unirme.component.html',
  styleUrls: ['./unirme.component.css']
})
export class UnirmeComponent implements OnInit {

  formularioUnirme:FormGroup;

  constructor(public formulario:FormBuilder,
    private unirmeService:UnirmeService,
    private ruteador:Router) { 

      this.formularioUnirme = this.formulario.group({
        nombre:[''],
        correo:[''],
        posicion:['']
      });
    }

  ngOnInit(): void {
  }


  enviarDatos():any{

    console.log("Me pulsaste");
    console.log(this.formularioUnirme.value);

    
    this.unirmeService.EnviarCorreo(this.formularioUnirme.value).subscribe(respuesta =>{
      alert("Solicitud enviada. Muchas gracias");
    });
    

  }

}
