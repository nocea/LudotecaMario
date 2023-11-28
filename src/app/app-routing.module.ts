import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './vistas/registro-usuario/registro-usuario.component';
import { BienvenidaComponent } from './vistas/bienvenida/bienvenida.component';
import { ListaUsuariosComponent } from './vistas/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path: 'registroUsu', component: RegistroUsuarioComponent },
  { path: 'inicio', component: BienvenidaComponent },
  { path: 'listaUsu', component: ListaUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
