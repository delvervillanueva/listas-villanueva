import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: any[] = [];
  constructor() { }

  ngOnInit() {
    this.alumnos = [
      { "nombre": "Juan López", "grado": "cuarto", "edad": 15, "sexo": "Masculino", "promedio": 11 },
      { "nombre": "Rita Vannesa", "grado": "cuarto", "edad": 16,"sexo": "Femenino", "promedio": 9 },
      { "nombre": "Raúl Santiago", "grado": "cuarto", "edad": 14,"sexo": "Masculino", "promedio": 14 },
      { "nombre": "Jorge Hermes", "grado": "cuarto", "edad": 15,"sexo": "Masculino", "promedio": 7 },
      { "nombre": "Fredesvinda Lopez", "grado": "cuarto", "edad": 15,"sexo": "Femenino", "promedio":18 },
      { "nombre": "Lester Vera", "grado": "cuarto", "edad": 16,"sexo": "Masculino", "promedio": 13 },
      { "nombre": "Fernando César", "grado": "cuarto", "edad": 17,"sexo": "Masculino", "promedio": 17 },
      { "nombre": "Ivan José", "grado": "cuarto", "edad": 14,"sexo": "Masculino", "promedio": 15 },
      { "nombre": "Juan Marco", "grado": "cuarto", "edad": 15,"sexo": "Masculino", "promedio": 10 },
      { "nombre": "Bruno Santigo", "grado": "cuarto", "edad": 15,"sexo": "Masculino", "promedio": 12 },
      { "nombre": "Lourdes Espinoza", "grado": "cuarto", "edad": 14,"sexo": "Femenino", "promedio": 18 },
      { "nombre": "Carmen Olivares", "grado": "cuarto", "edad": 15,"sexo": "Femenino", "promedio": 14 },
      { "nombre": "Emer Sandoval", "grado": "cuarto", "edad": 14,"sexo": "Masculino", "promedio": 15 },



  
    ];

    console.log(this.alumnos);
  }




}
