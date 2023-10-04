import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { customIncrement } from 'src/app/shared/store/counter.action';
import { CounterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent {

  constructor(private Store: Store<{counter : CounterModel}>){}

  counterInput! : number;
  actionType! : 'add';

  OnIncrement(){
    this.Store.dispatch(customIncrement({value: +this.counterInput,action:this.actionType}));
  }

}
