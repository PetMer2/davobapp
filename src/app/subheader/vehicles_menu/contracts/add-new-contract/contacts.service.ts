import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  constructor() { }

  contacts = [
    'Contact 1',
    'Contact 2',
    'Contact 3',
    'Contact 4',
    'Contact 5',
  ]

  getContacts(){
    return this.contacts;
  }

}