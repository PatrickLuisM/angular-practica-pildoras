import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora Mini';

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumar():number{
    this.resultado = Number(this.numero1) + Number(this.numero2);
    return this.resultado;
  }

  restar():number{
    this.resultado = Number(this.numero1) - Number(this.numero2);
    return this.resultado;
  }

  multiplicar():number{
    this.resultado = Number(this.numero1) * Number(this.numero2);
    return this.resultado;
  }

  dividir():number{
    this.resultado = Number(this.numero1) / Number(this.numero2);
    return this.resultado;
  }
}
