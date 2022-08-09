import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
 
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  UserTodo: Usuario[] = [];
  constructor(private userService: UsuarioService) {
    this.userService.getUsuario().subscribe(usuarios =>{
      this.UserTodo = usuarios;
      console.log(usuarios);
    })
  }

  resultado!: string;

  formularioContact = new FormGroup({
    Nombre: new FormControl('', [Validators.required]),
    Email: new FormControl('',[Validators.required, Validators.email]),
    //telefono: new FormControl('',[Validators.required]),
    FechaIngreso: new FormControl('',[Validators.required]),
    Contrasena: new FormControl('',[Validators.required]),
    ClienteId: new FormControl('', [Validators.required])
  });

  submit(usuario: Usuario): void{
    if (this.formularioContact.valid){
      this.resultado = "Registro exitoso";
      //alert("todos los datos son validos");
    }else{
      this.resultado = "todos los datos deben de ser requeridos";
      //alert("los datos deben de ser obligatorios");
    }
    console.log(usuario);
    this.userService.createUsuario(usuario).subscribe(data =>{
      //this.getUsuario();
      console.log(data);
    })
  }


  ngOnInit(): void {
  }

}
