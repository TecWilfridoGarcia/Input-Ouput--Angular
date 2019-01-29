import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  @Input() contador: number;
  @Output() contadorHijo = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

multiplicar(){
  this.contador *=2;
  //este es para devolver el cambio al padre
  this.contadorHijo.emit(this.contador);
}
dividir(){
  this.contador /=2;
  //este es para devolver el cambio al padre
  this.contadorHijo.emit(this.contador);
}
resetNieto(nuevoContador){
  this.contador = nuevoContador;
  this.contadorHijo.emit(this.contador);
}

}
