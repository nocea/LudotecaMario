import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit{
  usuario: Usuario;
  id: string = '';
  constructor(
    private usuarioService: UsuarioService,
    private ruta: ActivatedRoute,
    private ruter: Router,
    private location: Location
  ){
    this.usuario= {
      id: '',
      nombre: '',
      telefono: '',
      email: '',
      dni: '',
      direccion: '',
      ciudad: '',
      provincia: '',
      cp: ''
    };
  }

  ngOnInit() {
    this.id = this.ruta.snapshot.paramMap.get('id')!;
    this.usuarioService.getUsuario(this.id).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
    });
  }
  onSubmit() {
    this.updateUser();
  }
  updateUser(){
    this.usuarioService.coleccion = 'usuarios';
    this.usuarioService.updateUsuario(this.usuario)
      .then(() => console.log('Usuario actualizado'))
      .catch((error) => console.error(error));
  }
}
