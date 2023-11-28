import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './vistas/registro-usuario/registro-usuario.component';
import { BienvenidaComponent } from './vistas/bienvenida/bienvenida.component';

const routes: Routes = [
  { path: 'registroUsu', component: RegistroUsuarioComponent },
  { path: 'inicio', component: BienvenidaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
