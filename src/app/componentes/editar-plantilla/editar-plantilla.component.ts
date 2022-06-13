import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { PlantillaService } from 'src/app/servicios/plantilla.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-plantilla',
  templateUrl: './editar-plantilla.component.html',
  styleUrls: ['./editar-plantilla.component.css']
})
export class EditarPlantillaComponent implements OnInit {
  formularioDeJugadores:FormGroup;
  elID:any;  

  constructor(
    private activeRoute:ActivatedRoute,
    private plantillaService:PlantillaService,
    public ruteador : Router,
    public formulario : FormBuilder,
  ) { 
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID); 
    
    this.plantillaService.ObtenerJugador(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioDeJugadores.setValue({
          nombre:respuesta[0]['NOMBRE'],
          apellidos:respuesta[0]['APELLIDOS'],
          numero:respuesta[0]['NUMERO']
        });
      }
    );

    this.formularioDeJugadores=this.formulario.group(
      {
        nombre:[''],
        apellidos:[''],
        numero:['']    
      });



  }

  ngOnInit(): void {

    if( sessionStorage.getItem("rol") != 'admin'){

      console.log("no eres admin");
      this.ruteador.navigateByUrl("/iniciarSesion");
    }
  }



  
  actualizarJugador():any{
    
    this.plantillaService.EditarJugador(this.elID,this.formularioDeJugadores.value).subscribe(()=>{

      this.ruteador.navigateByUrl('/listar-plantilla');
      
    });
    
  }


}
