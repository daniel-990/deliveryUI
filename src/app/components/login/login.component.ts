import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

UserTodo: LoginService[] = [];
  constructor(private usuarioServiceLogin:LoginService){}
  //parametro para mostrar el mensaje en el front
  resultado!: string;

  formularioLogin = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
    // this.getUsuario();
    // this.getLoginUser();
  }

  submit() {
    if (this.formularioLogin.valid){
      this.resultado = "";
      //alert("todos los datos son validos"); 
      this.usuarioServiceLogin.getLoginUser().subscribe(usuarios =>{
        this.UserTodo = usuarios;
        //console.log(usuarios[0].email);
        for (let i = 0; i < usuarios.length; i++) {
          const usuario = usuarios[i].email;
          const pass = usuarios[i].pass;
          //console.log(this.formularioLogin.controls);
          //validacio
          if(this.formularioLogin.controls.usuario.value == usuario && this.formularioLogin.controls.pass.value == pass){
            //console.log(element);
            this.resultado = "el usuario es correcto";
            window.location.href = '/catalogo';
          }else{
            this.resultado = "el usuario es incorrecto";
          }
        }
      })
    }else{
      this.resultado = "todos los datos deben de ser requeridos";
      //alert("los datos deben de ser obligatorios");
    }
    // this.getUsuario
  }
}
