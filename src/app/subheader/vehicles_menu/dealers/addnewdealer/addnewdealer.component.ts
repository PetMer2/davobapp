import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Dealer } from '../../../../globalservices/dealer';

import { DealerService } from '../../../../globalservices/dealer.service';

@Component({
  selector: 'app-addnewdealer',
  templateUrl: './addnewdealer.component.html',
  styleUrls: ['./addnewdealer.component.css']
})
export class AddnewdealerComponent implements OnInit {

  constructor(private dealerService: DealerService) { }

  ngOnInit() {
  }

  //Form Controls
  name = new FormControl();
  street = new FormControl();
  postal = new FormControl();
  city = new FormControl();
  country = new FormControl();
  phone = new FormControl();
  fax = new FormControl();
  mobile = new FormControl();
  website = new FormControl();
  email = new FormControl();
  latitude = new FormControl();
  longitude = new FormControl();
  status = new FormControl();
  comments = new FormControl();

  //Create a new dealer
  formDealer(): Dealer {
    return new Dealer(
      this.name.value,
      this.street.value,
      this.postal.value,
      this.city.value,
      this.country.value,
      this.phone.value,
      this.fax.value,
      this.mobile.value,
      this.website.value,
      this.email.value,
      this.latitude.value,
      this.longitude.value,
      this.status.value,
      this.comments.value
    )
  }
//Add a new dealer to the database
addDealer() {
  let newDealer = this.formDealer();
  this.dealerService.add(newDealer)
}


  statuses = [
    'Active',
    'Inactive'
  ]

}