import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Trade } from '../models/trades.model';
import { TradeService } from '../services/trade.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class PositionComponent implements OnInit {

  constructor(private tradeService: TradeService) {

   }

  positionDataObj: Trade[];

  ngOnInit() {

    this.positionDataObj = this.tradeService.fetchTradeData(1);
  }

  addPostsData(event){
    console.log("Child Event Emitted successfully to Parent");

    console.log(event);
  }
}
