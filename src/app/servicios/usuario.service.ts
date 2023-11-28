import { Injectable } from '@angular/core';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
import { Usuario } from '../modelos/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore :Firestore) { }
  addUsuario(usuario:Usuario){
    const usuarioRef=collection(this.firestore,'usuarios');
    return addDoc(usuarioRef,usuario);
  }
}
