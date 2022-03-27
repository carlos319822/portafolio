import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina ={};
  cargada = false;
  equipo: any[] =[];

  constructor(private http: HttpClient) {


    //console.log('Servicio de infoPagina listo')

    //leer el archivo json
    this.cargarInfo();
    this.cargarEquipo();

    
   }


   private cargarInfo(){

    this.http.get('assets/data/data-pagina.json')

    //.subscribe((resp: any)
    .subscribe((resp: InfoPagina) =>{
      this.cargada=true;
      this.info =resp;

      //console.log(resp)

      console.log( resp);
    });
   }


   private cargarEquipo() {


    this.http.get('https://portafolio-8d38e-default-rtdb.firebaseio.com/equipo.json')

    //.subscribe((resp: any)
    .subscribe((resp: any) =>{

      console.log( resp);
      
      this.equipo =resp;
      

      //console.log(resp)

      
    });
   }
}
