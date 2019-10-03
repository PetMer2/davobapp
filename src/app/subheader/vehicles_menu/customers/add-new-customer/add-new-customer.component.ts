import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Customer } from '../../../../globalservices/customer';

import { CustomerService } from '../../../../globalservices/customer.service';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css']
})
export class AddNewCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  statuses = [
    'Active',
    'Inactive'
  ]

  countries = [
    'Poland',
    'UK',
    'Netherlands'
  ]

  name = new FormControl();
  coc = new FormControl();
  cdd = new FormControl();
  street = new FormControl();
  postal = new FormControl();
  city = new FormControl();
  country = new FormControl();
  phone = new FormControl();
  email = new FormControl();
  website = new FormControl();
  vatNo = new FormControl();
  cocNo = new FormControl();
  debtorNo = new FormControl();
  invoiceAddress = new FormControl();
  invoicePostal = new FormControl();
  invoiceCity = new FormControl();
  invoiceCountry = new FormControl();
  invoiceEmail = new FormControl();
  comments = new FormControl();
  status = new FormControl();

  formCustomer(){
    return new Customer (
      this.name.value,
      this.coc.value,
      this.street.value,
      this.postal.value,
      this.city.value,
      this.country.value,
      this.phone.value,
      this.email.value,
      this.website.value,
      this.vatNo.value,
      this.cocNo.value,
      this.debtorNo.value,
      this.invoiceAddress.value,
      this.invoicePostal.value,
      this.invoiceCity.value,
      this.invoiceCountry.value,
      this.invoiceEmail.value,
      this.comments.value,
      this.status.value
    )
  }

  addCustomer(){
    let customer = this.formCustomer();
    this.customerService.addCustomer(customer);
  }

  customers: Customer []

  getCustomers(){
    this.customers = this.customerService.getCustomers()
  }

  ngOnInit() {
  }

}