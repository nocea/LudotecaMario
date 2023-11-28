import { Injectable } from '@angular/core';
import { Firestore,collection,addDoc, collectionData,doc,deleteDoc } from '@angular/fire/firestore';
import { Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore :Firestore) { }
  addUsuario(usuario:Usuario){
    const usuariosRef=collection(this.firestore,'usuarios');
    return addDoc(usuariosRef,usuario);
  }
  getUsuarios():Observable<Usuario[]>{
    const usuariosRef=collection(this.firestore,'usuarios');
    return collectionData(usuariosRef,{idField:'id'})as Observable<Usuario[]>;
  }
  delUsuario(usuario: Usuario) {
    const usuarioRef = doc(this.firestore, `usuarios/${usuario.id}`);
    return deleteDoc(usuarioRef);
  }
}
