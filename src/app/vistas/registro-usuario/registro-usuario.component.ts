import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuario';
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit{
  formulario: FormGroup;
  constructor(private usuarioService:UsuarioService){
    this.formulario=new FormGroup({
    nombre:new FormControl(),
    dni:new FormControl(),
    direccion:new FormControl(),
    ciudad:new FormControl(),
    cp:new FormControl(),
    provincia:new FormControl(),
    telefono:new FormControl(),
    email:new FormControl()
  });}
  ngOnInit(): void {
  }
  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.usuarioService.addUsuario(this.formulario.value);
    console.log(response);
    this.formulario.reset();
  }
}

