import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto} from '../interfaces/producto.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  cargando=true;
  productos: Producto[]=[];

  constructor( private http: HttpClient) { 

    this.cargarProductos();
  }


  private cargarProductos(){

    this.http.get('https://portafolio-8d38e-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp:any) =>  {

      console.log( resp);
      this.productos = resp;

      this.cargando = false;

      
    });
  }

  getProducto( id: string ) {

    return this.http.get(`https://angular-html-25cf9.firebaseio.com/productos/${ id }.json`);

  }
}
