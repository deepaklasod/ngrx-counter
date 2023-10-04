import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent {

  constructor(private store:Store<{counter:CounterModel}>){}

  counterDisplay! : number;
  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      this.counterDisplay = data.counter;
    })
  }

}
