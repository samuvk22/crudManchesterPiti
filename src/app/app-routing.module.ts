import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCampoComponent } from './componentes/agregar-campo/agregar-campo.component';
import { EditarCampoComponent } from './componentes/editar-campo/editar-campo.component';
import { ListarCampoComponent } from './componentes/listar-campo/listar-campo.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListarPlantillaComponent } from './componentes/listar-plantilla/listar-plantilla.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { AgregarNoticiaComponent } from './componentes/agregar-noticia/agregar-noticia.component';
import { ListarNoticiasComponent } from './componentes/listar-noticias/listar-noticias.component';
import { EditarNoticiaComponent } from './componentes/editar-noticia/editar-noticia.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { UnirmeComponent } from './componentes/unirme/unirme.component';
import { ReservarCampoComponent } from './componentes/reservar-campo/reservar-campo.component';
import { AgregarJugadorComponent } from './componentes/agregar-jugador/agregar-jugador.component';
import { EditarPlantillaComponent } from './componentes/editar-plantilla/editar-plantilla.component';
import { MisReservasComponent } from './componentes/mis-reservas/mis-reservas.component';
import { MisPublicacionesComponent } from './componentes/mis-publicaciones/mis-publicaciones.component';

const routes: Routes = [
  {path: 'editar-plantilla/:id', component: EditarPlantillaComponent},
  {path: 'agregar-jugador', component: AgregarJugadorComponent},
  {path: 'listar-campos', component: ListarCampoComponent},
  {path: 'agregar-campo', component: AgregarCampoComponent},
  {path: 'unirme', component: UnirmeComponent},
  {path: 'editar-campo/:id', component: EditarCampoComponent},
  {path: 'reservar-campo/:id', component: ReservarCampoComponent},
  {path: 'listar-noticias', component: ListarNoticiasComponent},
  {path: 'agregar-noticia', component: AgregarNoticiaComponent},
  {path: 'mis-reservas', component: MisReservasComponent},
  {path: 'mis-publicaciones', component: MisPublicacionesComponent},
  {path: 'editar-noticia/:id', component: EditarNoticiaComponent},
  {path: 'listar-plantilla', component: ListarPlantillaComponent},
  {path: 'iniciarSesion', component: InicioSesionComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '', component:InicioComponent},  //no se pone ninguna ruta
  {path: '**', redirectTo:'/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
