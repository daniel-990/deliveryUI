import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalogo } from '../models/catalogo';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private httpClient: HttpClient) { }

  getCatalogo(): Observable<any>{
    let response = this.httpClient
    .get('https://localhost:7005/api/Producto')
      .pipe(map((x: any) =>{
        let catalogos: Catalogo[] = [];
        for(let catalogo of x){
          let todoCatalogos: Catalogo ={
            idproducto: catalogo.idProducto,
            nombreproducto: catalogo.nombreProducto,
            idrestaurante: catalogo.idRestaurante,
            precio: catalogo.precio,
            imagen: catalogo.imagen
          };
          catalogos.push(todoCatalogos);
        }
        return catalogos;
      }));
    return response;
  }
}
