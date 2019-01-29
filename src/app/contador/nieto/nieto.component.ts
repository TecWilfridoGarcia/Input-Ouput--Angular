import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ActionReset } from '../contador.action';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
 contador : number;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador')
    .subscribe( contador =>{
      this.contador = contador;
      console.log(contador);
    });
  }
  reset(){
    const accion = new ActionReset();
    this.store.dispatch(accion);
  }

}
