import { Action, createReducer, on, props } from '@ngrx/store';
import { decrementar, dividir, incrementar, multiplicar, reset } from "./contador.actions";
import { state } from "@angular/animations";




/* Creando el Reducer con un SWITCH 
export function contadorReducer(state: number = 10, action: Action){
    switch(action.type){
        case incrementar.type:
            return state + 1;
        case decrementar.type:
            return state - 1;
        default: 
        return state;
    }
}*/

export const initialState = 20;

export const contadorReducer = createReducer(
    initialState,
    on(incrementar, (state) => state + 1),
    on(decrementar, (state) => state - 1),
    on(multiplicar, (state, props) => state * props.numero),
    on(dividir, (state, {numero}) => state / numero),
    on(reset, (state) => 0)
  );