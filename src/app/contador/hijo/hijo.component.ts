import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ActionMultiplicar, ActionDividir } from '../contador.action';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador')
    .subscribe( contador =>{
      this.contador = contador;
      console.log(contador);
    });

  }

multiplicar(){
  const accion = new ActionMultiplicar(5);
  this.store.dispatch(accion);
}
dividir(){
  const accion = new ActionDividir(2);
  this.store.dispatch(accion);
}

}
