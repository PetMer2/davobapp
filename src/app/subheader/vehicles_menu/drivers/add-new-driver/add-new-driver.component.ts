import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Driver } from '../../../../globalservices/driver';

import { DriverService } from '../../../../globalservices/driver.service';

@Component({
  selector: 'app-add-new-driver',
  templateUrl: './add-new-driver.component.html',
  styleUrls: ['./add-new-driver.component.css']
})
export class AddNewDriverComponent implements OnInit {

  statuses = [
    'Active',
    'Inactive'
  ]

  constructor() { }

  ngOnInit() {
  }

  name = new FormControl();
  street = new FormControl();
  postal = new FormControl();
  city = new FormControl();
  country = new FormControl();
  phone = new FormControl();
  fax = new FormControl();
  mobile = new FormControl();
  privateMobile = new FormControl();
  email = new FormControl();
  customer = new FormControl();
  status = new FormControl();
  comments = new FormControl();

}