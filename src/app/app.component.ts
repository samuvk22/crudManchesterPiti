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
      //ini.innerHTML = "hola";
      const noini = document.getElementById("noini");
  
  
      if(sessionStorage.getItem("sesion") == "OK" ){
  
  
        if(ini != null){
          ini.style.display = "block";
          if(ini != null){
            ini.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="m-2" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>' + sessionStorage.getItem("usuario")!;
          }
         
        }
  
  
        if(noini != null){
          noini.style.display = "none";
  
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
    window.location.href = "http://localhost:4200/iniciarSesion";
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

