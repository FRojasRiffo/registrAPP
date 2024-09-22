import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  asistencias = [
    { asignatura: "Programación",
      fecha: "18-09-2024",
      presente: "Presente"
    },
    { asignatura: "Arquitectura",
      fecha: "18-09-2024",
      presente: "Presente"
    },
    { asignatura: "Portafolio",
      fecha: "18-09-2024",
      presente: "Ausente"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
