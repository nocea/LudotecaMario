import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './vistas/registro-usuario/registro-usuario.component';
import { BienvenidaComponent } from './vistas/bienvenida/bienvenida.component';
import { ListaUsuariosComponent } from './vistas/lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './vistas/editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: 'registroUsu', component: RegistroUsuarioComponent },
  { path: 'inicio', component: BienvenidaComponent },
  { path: 'listaUsu', component: ListaUsuariosComponent },
  { path: 'editarUsu/:id', component: EditarUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
