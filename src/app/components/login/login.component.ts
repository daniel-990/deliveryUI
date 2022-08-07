import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

usuario:Usuario[] = [];

  constructor(private usuarioService:UsuarioService){}
  //parametro para mostrar el mensaje en el front
  resultado!: string;


  formularioLogin = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(){
    this.usuarioService.getUsuario().subscribe(data => {
      this.usuario = data;
      console.log(data);
    });
  }
  onSubmit(usuario: Usuario): void{
    // console.log(usuario);
    // //Consumir el API de creacion
    // this.usuarioService.createUsuario(usuario).subscribe(data=>{
    //   this.getUsuario();
    // });
  }

  submit() {
    if (this.formularioLogin.valid){
      this.resultado = "Registro exitoso";
      //alert("todos los datos son validos");
    }else{
      this.resultado = "todos los datos deben de ser requeridos";
      //alert("los datos deben de ser obligatorios");
    }
  }
}
