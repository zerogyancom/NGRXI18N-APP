import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { flightstatusLang } from '../store/lang.action';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-flightstatus',
  templateUrl: './flightstatus.component.html',
  styleUrls: ['./flightstatus.component.css']
})
export class FlightstatusComponent implements OnInit {

  lang:any;
  title:"Flight status";
  action$:Subscription;

  constructor(private store:Store<{lang:string}>) { }

  ngOnInit() {
   this.action$ = this.store.select('lang').subscribe(v=>{
      console.log(v["lang"],"---lang---")
      this.lang=v["lang"];
    })


    this.store.dispatch(flightstatusLang({locale:'en'}))
  }

  ngOnDestroy(){
    this.action$.unsubscribe();
  }

}
