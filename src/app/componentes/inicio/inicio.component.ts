import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';


import { InicioService } from 'src/app/servicios/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  NoticiaUltima:any;
  CampoUltimo:any;
  constructor(private inicioService:InicioService ) { }

  

  ngOnInit(): void {

    this.inicioService.ObtenerUltimaNoticia().subscribe(respuesta=>{
      console.log(respuesta);

      this.NoticiaUltima = respuesta;
    });


    this.inicioService.ObtenerUltimoCampo().subscribe(respuesta=>{
      console.log(respuesta);

      this.CampoUltimo = respuesta;
    });


  }

}
