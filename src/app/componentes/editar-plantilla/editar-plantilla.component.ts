import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-plantilla',
  templateUrl: './editar-plantilla.component.html',
  styleUrls: ['./editar-plantilla.component.css']
})
export class EditarPlantillaComponent implements OnInit {

  constructor(
    public ruteador : Router
  ) { }

  ngOnInit(): void {

    if( sessionStorage.getItem("rol") != 'admin'){

      console.log("no eres admin");
      this.ruteador.navigateByUrl("/iniciarSesion");
    }
  }

  actualizarJugador():any{
    
  }

}
