import { Injectable } from '@angular/core';

@Injectable()
export class TracksService {

  constructor() { }

  tracks = [
    'Track 1',
    'Track 2',
    'Track 3',
    'Track 4',
    'Track 5',
  ]

  getTracks(){
    return this.tracks;
  }

}