import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators,} from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit{
  mensaje:string="Pulsa para registrar el usuario";
  creado:boolean=false;
  formulario: FormGroup;
  constructor(private usuarioService:UsuarioService){
    this.formulario=new FormGroup({
    nombre:new FormControl((''),Validators.required),
    dni:new FormControl(),
    direccion:new FormControl(),
    ciudad:new FormControl(),
    cp:new FormControl(),
    provincia:new FormControl(),
    telefono:new FormControl(),
    email:new FormControl('',[Validators.required,Validators.email])
  });}
  ngOnInit(): void {
     }
   onSubmit() {
    console.log(this.formulario.value)
    this.usuarioService.addUsuario(this.formulario.value);
    this.formulario.reset();
    this.creado=true;
    this.mensaje="Se ha registrado un usuario";
  }
}

