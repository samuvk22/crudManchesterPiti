import { Component, OnInit } from '@angular/core';
import { ReservarService } from 'src/app/servicios/reservar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent implements OnInit {

  misReservas:any;

  constructor( private reservarService:ReservarService,
    private ruteador:Router ) {

    
   }

  ngOnInit(): void {

    if( sessionStorage.getItem("sesion") != 'OK'){

      alert("Para ver tus reservas debes iniciar sesion!!!!");
      this.ruteador.navigateByUrl("/iniciarSesion");
     
    }
    this.reservarService.ObtenerMisReservas().subscribe(respuesta=>{

      console.log(respuesta);

      this.misReservas=respuesta;
    });
  }


  borrarRegistro(id:any,iControl:any){
    console.log(id);
    
    console.log(iControl);

    if(window.confirm("¿Desea borrar este campo?")){
      this.reservarService.BorrarReserva(id).subscribe((respuesta=>{
        this.misReservas.splice(iControl,1);
      }));
    }
    
  }

}
