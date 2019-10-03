import { Injectable } from '@angular/core';

@Injectable()
export class ManagerService {

  constructor() { }

  managers = [
    'Manager 1',
    'Manager 2',
    'Manager 3',
    'Manager 4',
    'Manager 5',
  ]

  getManagers(){
    return this.managers;
  }

}