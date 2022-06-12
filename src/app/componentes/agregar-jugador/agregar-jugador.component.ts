import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-jugador',
  templateUrl: './agregar-jugador.component.html',
  styleUrls: ['./agregar-jugador.component.css']
})
export class AgregarJugadorComponent implements OnInit {
  formularioDeJugadores:FormGroup;

  constructor(public fomulario:FormBuilder) {
    this.formularioDeJugadores=this.fomulario.group({
      nombre:[''],
      apellidos:[''],
      dorsal:['']
    });
   }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.formularioDeJugadores.value);  
  }

}
