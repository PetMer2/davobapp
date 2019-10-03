import { Injectable } from '@angular/core';
import { Driver } from './driver';

@Injectable()
export class DriverService {

  drivers: Driver [] = [

  ]

  constructor() { }

  getDrivers(){
    return this.drivers;
  }

  addDriver(driver: Driver){
    this.drivers.push(driver);
  }

}