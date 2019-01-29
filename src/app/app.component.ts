import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromContador from './contador/contador.action';

interface AppState{
  contador:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-app';

  contador: number;
  constructor( private store:Store<AppState>){
    this.store.select('contador')
    .subscribe(contador =>
       this.contador = contador);
  }
  incrementar(){
    const accion = new fromContador.ActionIncrementar();
    this.store.dispatch(accion);
  }
  decrementar(){
    const accion = new fromContador.ActionDecrementar();
    this.store.dispatch(accion);
  }

}
