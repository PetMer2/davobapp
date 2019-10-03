import { Injectable } from '@angular/core';

@Injectable()
export class CoordinatorService {

  constructor() { }

  COORDINATORS = [
    'Coordinator 1',
    'Coordinator 2',
    'Coordinator 3',
    'Coordinator 4',
    'Coordinator 5',
    'Coordinator 6',
    'Coordinator 7',
  ]

  getCoordinators() {
    return this.COORDINATORS;
  }

}