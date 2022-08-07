import { Component, OnInit } from '@angular/core';
import { Catalogo } from '../models/catalogo';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor() { }

  catalogo: Catalogo[] = [
    {
      idproducto:0,
      nombreproducto:"papas",
      idrestaurante:1892,
      precio:1000
    },
    {
      idproducto:1,
      nombreproducto:"papaya",
      idrestaurante:1990,
      precio:1200
    },
    {
      idproducto:2,
      nombreproducto:"frituras",
      idrestaurante:19989,
      precio:1250
    },
    {
      idproducto:3,
      nombreproducto:"pastas",
      idrestaurante:1234,
      precio:9300
    },
  ]


  ngOnInit(): void {
  }


}
