import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { checkinLang } from '../store/lang.action';


@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  lang:any;
  anction$:Subscription;
  constructor(private store:Store<{lang:string}>) { }


  ngOnInit() {
    this.anction$ = this.store.select('lang').subscribe(v=>{
      console.log(v["lang"],"---lang---")
      this.lang=v["lang"];
    })


    this.store.dispatch(checkinLang({locale:'en'}))
  }

  ngOnDestroy(){
    this.anction$.unsubscribe();
  }
}
