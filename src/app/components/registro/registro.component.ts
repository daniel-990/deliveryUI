import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  resultado!: string;

  formularioContact = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('',[Validators.required, Validators.email]),
    telefono: new FormControl('',[Validators.required]),
    direccion: new FormControl('',[Validators.required]),
    contraseña: new FormControl('',[Validators.required]),
  });

  submit() {
    if (this.formularioContact.valid)
      this.resultado = "Registro exitoso";
      //alert("todos los datos son validos");
    else
      this.resultado = "todos los datos deben de ser requeridos";
      //alert("los datos deben de ser obligatorios");
  }

  ngOnInit(): void {
  }

}
