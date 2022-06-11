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

  borrarRegistro(id:any, iControl:any){
    console.log(id);
    console.log(iControl);

    this.plantillaService.BorrarJugador(id).subscribe((respuesta)=>{
      this.Jugadores.splice(iControl,1);
    });

  }

}
