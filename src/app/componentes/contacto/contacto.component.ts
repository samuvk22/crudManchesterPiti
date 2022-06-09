import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const ini = document.getElementById("ini");
    //ini.innerHTML = "hola";
    const noini = document.getElementById("noini");


    if(sessionStorage.getItem("sesion") == "OK" ){

      console.log("entras al if ");  

      if(ini != null){
        ini.style.display = "block";   
        console.log("cambias el ini a block");   
      }


      if(noini != null){
        noini.style.display = "none";
        console.log("cambias el noini a none");
      }
     // window.location.reload();
  }else{

    console.log("entras al else");
    if(noini != null){
      noini.style.display = "block";
      console.log("cambias el noini a block");
    }
    if(ini != null){
      ini.style.display = "none";
      console.log("cambias el ini a none");
    }
  }
  }

}
