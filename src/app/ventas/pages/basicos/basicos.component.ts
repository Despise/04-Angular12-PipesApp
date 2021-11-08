import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'guillermo';
  nombreUpper: string = 'GUILLERMO';
  nombreCompleto: string = 'guilLerMo SEguRa';

  fecha: Date = new Date();

}
