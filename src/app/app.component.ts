import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudManchesterPiti';


  mostrar:boolean = false;

  sesion:any = sessionStorage.getItem("sesion");
}
