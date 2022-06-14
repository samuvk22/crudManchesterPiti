import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AgregarCampoComponent } from './componentes/agregar-campo/agregar-campo.component';
import { EditarCampoComponent } from './componentes/editar-campo/editar-campo.component';
import { ListarCampoComponent } from './componentes/listar-campo/listar-campo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PieComponent } from './componentes/pie/pie.component';
import { ListarPlantillaComponent } from './componentes/listar-plantilla/listar-plantilla.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ListarNoticiasComponent } from './componentes/listar-noticias/listar-noticias.component';
import { AgregarNoticiaComponent } from './componentes/agregar-noticia/agregar-noticia.component';
import { EditarNoticiaComponent } from './componentes/editar-noticia/editar-noticia.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { EditarPlantillaComponent } from './componentes/editar-plantilla/editar-plantilla.component';
import { UnirmeComponent } from './componentes/unirme/unirme.component';
import { ReservarCampoComponent } from './componentes/reservar-campo/reservar-campo.component';
import { AgregarJugadorComponent } from './componentes/agregar-jugador/agregar-jugador.component';
import { MisReservasComponent } from './componentes/mis-reservas/mis-reservas.component';
import { MisPublicacionesComponent } from './componentes/mis-publicaciones/mis-publicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarCampoComponent,
    EditarCampoComponent,
    ListarCampoComponent,
    InicioComponent,
    PieComponent,
    ListarPlantillaComponent,
    ContactoComponent,
    ListarNoticiasComponent,
    AgregarNoticiaComponent,
    EditarNoticiaComponent,
    InicioSesionComponent,
    EditarPlantillaComponent,
    UnirmeComponent,
    ReservarCampoComponent,
    AgregarJugadorComponent,
    MisReservasComponent,
    MisPublicacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
