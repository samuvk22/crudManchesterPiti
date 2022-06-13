import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PlantillaService } from 'src/app/servicios/plantilla.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-jugador',
  templateUrl: './agregar-jugador.component.html',
  styleUrls: ['./agregar-jugador.component.css']
})
export class AgregarJugadorComponent implements OnInit {
  formularioDeJugadores:FormGroup;

  constructor(
    public fomulario:FormBuilder,
    private plantillaService:PlantillaService,
    private ruteador:Router
    ) {
    this.formularioDeJugadores=this.fomulario.group({
      nombre:[''],
      apellidos:[''],
      numero:['']
    });
   }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.formularioDeJugadores.value);  
     this.plantillaService.AgregarJugador(this.formularioDeJugadores.value).subscribe();
     this.ruteador.navigateByUrl('/listar-plantilla')
  }

}
