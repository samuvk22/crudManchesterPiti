import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudManchesterPiti';


  mostrar:boolean = false;
  

  sesion:any = sessionStorage.getItem("sesion");


  constructor(private ruteador:Router) { 


    }
  
  ngOnInit(): void {
    


      
    
      const ini = document.getElementById("ini");
      const noini = document.getElementById("noini");
  
  
      if(sessionStorage.getItem("sesion") == "OK"){
  
  
        if(ini != null){
          ini.style.display = "block";
          //ini.innerHTML = sessionStorage.getItem("usuario");
        }
  
  
        if(noini != null){
          noini.style.display = "display";
  
        }
       // window.location.reload();
    }else{

      if(noini != null){
        noini.style.display = "block";
  
      }
    }
    
  }

  cerrarSesion(){


    sessionStorage.clear();
    this.ruteador.navigateByUrl("/iniciarSesion");
    //window.location.reload();

  }
}



/* 
function cargar_sesionStorage() {
  

    var ini = document.getElementById("ini");
    var noini = document.getElementById("noini");


    if(sessionStorage.getItem("sesion") == "OK"){


      if(ini != null){
        ini.style.display = "block";
        //ini.innerHTML = sessionStorage.getItem("usuario");
      }


      if(noini != null){
        noini.style.display = "display";

      }

  }else{
    if(ini != null){
      ini.style.display = "display";
      //ini.innerHTML = sessionStorage.getItem("usuario");
    }


    if(noini != null){
      noini.style.display = "block";

    }
  }
} */

