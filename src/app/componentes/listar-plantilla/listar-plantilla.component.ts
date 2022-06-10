import { Component, OnInit } from '@angular/core';
import { PlantillaService } from 'src/app/servicios/plantilla.service';

@Component({
  selector: 'app-listar-plantilla',
  templateUrl: './listar-plantilla.component.html',
  styleUrls: ['./listar-plantilla.component.css']
})
export class ListarPlantillaComponent implements OnInit {
Jugadores:any;
  constructor(
    private plantillaService:PlantillaService
  ) { }

  ngOnInit(): void {
    this.plantillaService.ObtenerJugador().subscribe(respuesta=>{
      console.log(respuesta);
      this.Jugadores=respuesta;
    });
  }

}
