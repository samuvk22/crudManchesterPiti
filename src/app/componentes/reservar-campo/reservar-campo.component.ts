import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReservarService } from 'src/app/servicios/reservar.service';
import { Usuario } from 'src/app/servicios/Usuario';


@Component({
  selector: 'app-reservar-campo',
  templateUrl: './reservar-campo.component.html',
  styleUrls: ['./reservar-campo.component.css']
})
export class ReservarCampoComponent implements OnInit {

  formularioReserva:FormGroup;
  elID:any;
  reservas:any;

  constructor(private activeRoute:ActivatedRoute,
    private reservarService:ReservarService,
    public formulario:FormBuilder,
    private ruteador:Router) {

      this.elID= this.activeRoute.snapshot.paramMap.get('id');
      console.log(this.elID);


      this.reservarService.ObtenerCampo(this.elID).subscribe(
        respuesta=>{
          console.log(respuesta);
          this.formularioReserva.setValue({
            idcampo:respuesta[0]['ID_CAMPO'],
            usuario:sessionStorage.getItem("usuario"),
            fecha:"",
            hora:""
          });
        }
      );

      this.formularioReserva = this.formulario.group({
        idcampo:[''],
        usuario:[''],
        fecha:[''],
        hora:['']
      });
     }

  ngOnInit(): void {



    if(sessionStorage.getItem("sesion") != "OK"){
      alert("Para reservar debe iniciar sesion");
      this.ruteador.navigateByUrl('/iniciarSesion');
    }
  }


  enviarDatos():any{
    
    console.log(this.elID);
    console.log(this.formularioReserva.value);


    this.reservarService.ObtenerReservas().subscribe(respuesta=>{

      this.reservas = respuesta;

      var fechaHora = this.formularioReserva.value.fecha + " " + this.formularioReserva.value.hora + ":00.000000";

      console.log(fechaHora);
      


      var encontrado = false;

      for(var i = 0; i < this.reservas.length;i++){

        console.log(this.reservas[i].HORA);
        console.log(this.reservas[i].USUARIO);
        console.log(this.reservas[i].ID_CAMPO);
         if(this.formularioReserva.value.idcampo == this.reservas[i].ID_CAMPO && this.formularioReserva.value.usuario == this.reservas[i].USUARIO && fechaHora == this.reservas[i].HORA){
          encontrado = true;
        } 

      }

      if(encontrado == true){
        alert("La reserva ya existe!!!!");
        this.ruteador.navigateByUrl("/listar-campos");
      }else{
        this.reservarService.Reservar(this.elID,this.formularioReserva.value).subscribe(()=>{

          alert("campo reservado con exito");
          this.ruteador.navigateByUrl('/listar-campos');
        }); 
      }

    });

     
    
  }

}
