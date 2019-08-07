import { createAction, props } from '@ngrx/store';


export const flightstatusLang = createAction(
    "[Flightstatus Page] Flightstatus", 
    props<{locale:string}>()
    );

    export const flightstatusLangSuccess = createAction(
        "[Flightstatus Page] Flightstatus Success", 
        props<{payload:any}>()
        );

export const checkinLang = createAction(
    "[Checkin Page] Checkin", 
    props<{locale:string}>()
    );

    export const checkinLangSuccess = createAction(
        "[Checkin Page] Checkin Success", 
        props<{payload:any}>()
        );