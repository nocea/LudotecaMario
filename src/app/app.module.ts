import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RegistroUsuarioComponent } from './vistas/registro-usuario/registro-usuario.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BienvenidaComponent } from './vistas/bienvenida/bienvenida.component';
import { ListaUsuariosComponent } from './vistas/lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    BienvenidaComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
