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
  }


  enviarDatos():any{
    
    console.log(this.elID);
    console.log(this.formularioReserva.value);


     this.reservarService.Reservar(this.elID,this.formularioReserva.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-campos');
    }); 
    
  }

}
