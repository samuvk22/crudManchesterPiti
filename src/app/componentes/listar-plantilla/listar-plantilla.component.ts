import { Component, OnInit } from '@angular/core';
import { PlantillaService } from 'src/app/servicios/plantilla.service';

@Component({
  selector: 'app-listar-plantilla',
  templateUrl: './listar-plantilla.component.html',
  styleUrls: ['./listar-plantilla.component.css']
})
export class ListarPlantillaComponent implements OnInit {
  Jugadores: any;
  constructor(
    private plantillaService: PlantillaService
  ) { }

  ngOnInit(): void {
    this.plantillaService.ObtenerPlantilla().subscribe(respuesta => {
      console.log(respuesta);
      this.Jugadores = respuesta;
    });
  }


  ngAfterViewInit():void{


    setTimeout(cargarSesions,500);


    function cargarSesions(){
     


      if(sessionStorage.getItem("sesion") == "OK" && sessionStorage.getItem("rol") == "admin") {
        console.log("entraste al if admin");


        for(var i = 0; i < document.getElementsByClassName("admin").length; i++){


          console.log("entraste al for");

          document.getElementsByClassName("admin")[i].classList.add("d-block");

          console.log(document.getElementsByClassName("admin")[i].classList);

          
    
        } 
      }

      if(sessionStorage.getItem("sesion") == "OK" && sessionStorage.getItem("rol") == "usuario"){

        console.log("entraste al if usuario");

        var admin = document.getElementsByClassName("admin");

        for(var i = 0; i < admin.length; i++){


          console.log("entraste al for");

          admin[i].classList.add("d-none");

          console.log(admin[i].classList);

          
    
        } 

      }

      if(sessionStorage.getItem("sesion") == "NOOK" || sessionStorage.getItem("rol") == undefined){
        
        console.log("entraste al if sinusuario");

        for(var i = 0; i < document.getElementsByClassName("admin").length; i++){


          console.log("entraste al for");

          document.getElementsByClassName("admin")[i].classList.add("d-none");

          console.log(document.getElementsByClassName("admin")[i].classList);

          
    
        } 

      }
    }
    


  }

  borrarRegistro(id: any, iControl: any) {
    console.log(id);
    console.log(iControl);
    if (window.confirm("¿Desea eliminar el jugador?")) {
      this.plantillaService.BorrarJugador(id).subscribe((respuesta) => {
        this.Jugadores.splice(iControl, 1);
      });
    }
  }

}
