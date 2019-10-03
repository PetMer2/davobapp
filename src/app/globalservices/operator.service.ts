import { Injectable } from '@angular/core';

@Injectable()
export class OperatorService {

  constructor() { }

  operators = [
    'Operator 1',
    'Operator 2',
    'Operator 3',
    'Operator 4',
    'Operator 5',
  ]

  getOperators(){
    return this.operators;
  }



}