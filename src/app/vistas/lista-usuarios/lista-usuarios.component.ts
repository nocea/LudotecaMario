import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuario';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit{
  usuarios:Usuario[]=[];
  constructor(private usuarioService:UsuarioService){}
  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    })
  }
   delUsuario(usuario: Usuario) {
    this.usuarioService.delUsuario(usuario);
  }
}
