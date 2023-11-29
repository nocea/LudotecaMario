import { Injectable } from '@angular/core';
import { Firestore,collection,addDoc, collectionData,doc,deleteDoc, setDoc, docData } from '@angular/fire/firestore';
import { Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  coleccion: string = '';
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
  updateUsuario(usuario: Usuario) {
    console.log(usuario);
    const elementDocRef = doc(this.firestore, `usuarios/${usuario.id}`);
    return setDoc(elementDocRef, usuario);
  }
  getUsuario(id: string) {
    const elementDocRef = doc(this.firestore, `usuarios/${id}`);
    return docData(elementDocRef, { idField: 'id' }) as Observable<any>;
  }
}
