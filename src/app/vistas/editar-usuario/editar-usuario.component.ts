import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private ruta: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.usuarioForm = this.fb.group({
      id: [''], 
      nombre: ['', Validators.required],
      dni:[''],
      direccion:[''],
      ciudad:[''],
      cp:[''],
      provincia:[''],
      telefono:[''],
      email: ['']
    });
  }

  ngOnInit() {
    this.id = this.ruta.snapshot.paramMap.get('id')!;
    this.usuarioService.getUsuario(this.id).subscribe((usuario: Usuario) => {
      this.usuarioForm.patchValue(usuario);
    });
  }

  onSubmit() {
   
      this.updateUser();
  }

  updateUser() {
    this.usuarioService.coleccion = 'usuarios';
    const updatedUsuario: Usuario = {...this.usuarioForm.value };
    
    this.usuarioService.updateUsuario(updatedUsuario)
      .then(() => {
        console.log('Usuario actualizado');
      })
      .catch((error) => console.error(error));
  }
}
