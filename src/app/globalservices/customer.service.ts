import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable()
export class CustomerService {

  constructor() { }

  customers: Customer[] = [

  ]

  getCustomers(){
    return this.customers;
  }

  addCustomer(customer: Customer){
    this.customers.push(customer)
  }


}