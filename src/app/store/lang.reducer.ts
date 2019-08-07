import { Action, createReducer, on } from '@ngrx/store';

import * as langActions from './lang.action';

export interface State{
    lang:any[];
}

export const initialState:State = { lang:['initial lang']}

//Reducer for flight status / checkin
const langReducer = createReducer(
    initialState,
    on(langActions.flightstatusLang, state=>({
        ...state,
        lang:['flight status lang']
    })),
    on(langActions.flightstatusLangSuccess, (state,action)=>({
        ...state,
        lang:[...action.payload]
    })),
    on(langActions.checkinLang, state=>({
        ...state,
        lang:['check in lang']
    })),
    on(langActions.checkinLangSuccess, (state,action)=>({
        ...state,
        lang:[...action.payload]
    }))
);

export function reducer(state:State|undefined, action:Action){
    return langReducer(state, action);
}
