import { Action } from "@ngrx/store";

export const INCREMENTAR = "[Contador] Incrementar";
export const DECREMENTAR = "[Contador] Decrementar";
export const MULTIPLICAR = "[Contador] Multiplicar";
export const DIVIDIR = "[Contador] Dividir";
export const RESET = "[Contador] Reset";


export class ActionIncrementar implements Action {
  readonly type = INCREMENTAR;
}

export class ActionDecrementar implements Action {
  readonly type = DECREMENTAR;
}
export class ActionMultiplicar implements Action {
  readonly type = MULTIPLICAR;
  constructor(public payload: number ){}
}

export class ActionDividir implements Action {
  readonly type = DIVIDIR;
  constructor(public payload: number ){}
}
export class ActionReset implements Action {
  readonly type = RESET;
}
export type actions = ActionIncrementar| ActionDecrementar | ActionMultiplicar| ActionDividir | ActionReset;
