import { Component, OnInit } from '@angular/core';


import { NoticiasService } from 'src/app/servicios/noticias.service';

@Component({
  selector: 'app-listar-noticias',
  templateUrl: './listar-noticias.component.html',
  styleUrls: ['./listar-noticias.component.css']
})
export class ListarNoticiasComponent implements OnInit {


  Noticias:any;

  constructor(
    private noticiasService:NoticiasService 
  ) { }

  ngOnInit(): void {

    this.noticiasService.ObtenerNoticias().subscribe(respuesta=>{
      console.log(respuesta);

      this.Noticias = respuesta;
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

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);

    if(window.confirm("¿Desea borrar este campo?")){
      this.noticiasService.BorrarNoticia(id).subscribe((respuesta=>{
        this.Noticias.splice(iControl,1);
      }));
    }
    
  }

}
