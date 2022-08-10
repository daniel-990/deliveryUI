import { Component, OnInit } from '@angular/core';
import { Catalogo } from '../models/catalogo';
import { CatalogoService } from '../services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  catalogoTodo: Catalogo[] = [];
  constructor(private catalogoService: CatalogoService) { 
    this.catalogoService.getCatalogo().subscribe(catalogos =>{
      this.catalogoTodo = catalogos;
      console.log(catalogos);
    })
  }

  catalogo: Catalogo[] = [
    {
      idproducto:0,
      nombreproducto:"papas",
      idrestaurante:1892,
      precio:1000,
      imagen:''
    },
    {
      idproducto:1,
      nombreproducto:"papaya",
      idrestaurante:1990,
      precio:1200,
      imagen:''
    },
    {
      idproducto:2,
      nombreproducto:"frituras",
      idrestaurante:19989,
      precio:1250,
      imagen:''
    },
    {
      idproducto:3,
      nombreproducto:"pastas",
      idrestaurante:1234,
      precio:9300,
      imagen:''
    },
  ]


  ngOnInit(): void {
  }


}