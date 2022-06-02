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

const routes: Routes = [


  {path: 'listar-campos', component: ListarCampoComponent},
  {path: 'agregar-campo', component: AgregarCampoComponent},
  {path: 'editar-campo/:id', component: EditarCampoComponent},
  {path: 'listar-noticias', component: ListarNoticiasComponent},
  {path: 'agregar-noticia', component: AgregarNoticiaComponent},
  {path: 'editar-noticia/:id', component: EditarNoticiaComponent},
  {path: 'listar-plantilla', component: ListarPlantillaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '', component:InicioComponent},  //no se pone ninguna ruta
  {path: '**', redirectTo:'/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
