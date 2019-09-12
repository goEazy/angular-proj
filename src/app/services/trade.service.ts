import { Injectable } from '@angular/core';
import { Trade } from '../models/trades.model';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor() { }

  fetchTradeData(tradeId) : Trade[] {
    return [{
      equityName:"NOMURA",
      tradeDate: "06-09-2019",
      tradeId: 123
    }];
  }
}
