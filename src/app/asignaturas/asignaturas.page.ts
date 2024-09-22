import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  asignaturas = [
    { sigla: "PGY4121",
      nombre: "Programación",
      seccion: "001D"
    },
    { sigla: "ASY4131",
      nombre: "Arquitectura",
      seccion: "001D"
    },
    { sigla: "APY4461",
      nombre: "Portafolio",
      seccion: "006D"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
