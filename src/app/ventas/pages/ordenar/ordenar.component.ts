import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  mayuscula: boolean = false;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'DareDevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Shazam',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Cyborg',
      vuela: true,
      color: Color.plomo
    }
  ];

  toggleMayuscula() {
    this.mayuscula = this.mayuscula == true ? false : true;
    // this.mayuscula = !this.mayuscula; // otra forma
  }

  ordenarPorNombre(valor: string) {
    this.ordenarPor = valor;
  }

}
