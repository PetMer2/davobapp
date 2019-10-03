import { Injectable } from '@angular/core';
import { Dealer } from './dealer'

@Injectable()
export class DealerService {

  constructor() { }

  add(dealer: Dealer){
    this.dealers.push(dealer)
  }

  dealers: Dealer [] = [

  ]

}