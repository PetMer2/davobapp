import { Injectable } from '@angular/core';
import { Testfunction } from '../subheader/vehicles_menu/testfunctions/add-test-function/testfunction';

@Injectable()
export class TestfunctionService {

  constructor() { }

  testfunctions: Array<Testfunction> = []

  addTestfunction(testfunction: Testfunction){
    this.testfunctions.push(testfunction)
  }

}