import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(){}

  //parametro para mostrar el mensaje en el front
  resultado!: string;

  formularioLogin = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('',[Validators.required])
  });

  submit() {
    if (this.formularioLogin.valid)
      this.resultado = "Registro exitoso";
      //alert("todos los datos son validos");
    else
      this.resultado = "todos los datos deben de ser requeridos";
      //alert("los datos deben de ser obligatorios");
  }

  ngOnInit(): void {}

}
 
