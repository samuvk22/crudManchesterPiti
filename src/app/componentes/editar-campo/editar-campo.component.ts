import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CamposServiceService } from 'src/app/servicios/campos-service.service';

@Component({
  selector: 'app-editar-campo',
  templateUrl: './editar-campo.component.html',
  styleUrls: ['./editar-campo.component.css']
})
export class EditarCampoComponent implements OnInit {

  formularioCampos:FormGroup;
  elID:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private camposServiceService:CamposServiceService,
    public formulario:FormBuilder,
    private ruteador:Router

  ) { 
    this.elID= this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);

    this.camposServiceService.ObtenerCampo(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioCampos.setValue({
          nombre:respuesta[0]['NOMBRE'],
          direccion:respuesta[0]['DIRECCION'],
          tipo:respuesta[0]['TIPO']
        });
      }
    );

    this.formularioCampos = this.formulario.group({
      nombre:[''],
      direccion:[''],
      tipo:['']
    });
  }

  ngOnInit(): void {
  }



  enviarDatos():any{
    
    console.log(this.elID);
    console.log(this.formularioCampos.value);


    this.camposServiceService.EditarCampo(this.elID,this.formularioCampos.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-campos');
    });
    
  }
}
