import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCampoComponent } from './componentes/agregar-campo/agregar-campo.component';
import { EditarCampoComponent } from './componentes/editar-campo/editar-campo.component';
import { ListarCampoComponent } from './componentes/listar-campo/listar-campo.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [


  {path: 'listar-campos', component: ListarCampoComponent},
  {path: 'agregar-campo', component: AgregarCampoComponent},
  {path: 'editar-campo/:id', component: EditarCampoComponent},
  {path: '', component:InicioComponent},  //no se pone ninguna ruta
  {path: '**', redirectTo:'/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
