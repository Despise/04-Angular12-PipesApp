import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Guillermo';
  genero: string = 'M';

  invitacionMapa = {
    'M': 'invitarlo',
    'F': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Guillermo', 'Fernando', 'Natalia', 'Andrea'];

  clientesMapa = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.nombre = 'Natalia';
    this.genero = 'F';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Guillermo',
    edad: '39',
    direccion: 'Santiago Chile'
  }

  // json pipe
  heroes = [
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    }
  ];

  //AsyncPipe
  myObserbable = interval(1000); //emite: 0,1,2,3,4 etc

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  })
}
