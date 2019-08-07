import { Injectable } from '@angular/core';
import { createEffect, Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { LangService } from '../core/lang.service';

@Injectable()
export class LangEffect{
    constructor(private action$:Actions, private lang:LangService ){}

    loadLang$ = createEffect(
        ()=> this.action$.pipe(
            ofType('[Flightstatus Page] Flightstatus'),
            mergeMap((v)=> this.lang.getLangData(v["locale"],"fs")
            .pipe(
                map(data=> ({type:'[Flightstatus Page] Flightstatus Success',payload:data})),
                catchError(()=>EMPTY)
                )),
        )
    )


    loadLang2$ = createEffect(
        ()=> this.action$.pipe(
            ofType('[Checkin Page] Checkin'),
            mergeMap((v)=> this.lang.getLangData(v["locale"],"checkin")
            .pipe(
                map(data=> ({type:'[Checkin Page] Checkin Success',payload:data})),
                catchError(()=>EMPTY)
                )),
        )
    )
}

