import { Component, OnInit } from '@angular/core';
import { ProtoService, Proto } from '../../../../globalservices/proto.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-new-veh',
  templateUrl: './add-new-veh.component.html',
  styleUrls: ['./add-new-veh.component.css']
})
export class AddNewVehComponent implements OnInit {

  constructor(private protoService: ProtoService) { }

  ngOnInit() {
    this.PROTO_DATA = this.protoService.get();
  }

  proto = new FormControl();
  operator = new FormControl();
  group = new FormControl();
  subgroup = new FormControl();
  description = new FormControl();
  vehicletype = new FormControl();
  enginetype = new FormControl();
  licenseid = new FormControl();
  customer = new FormControl();
  driver1 = new FormControl();
  driver2 = new FormControl();
  comments = new FormControl();

  addProto(){
    let newProto = {
      proto: this.proto.value,
      operator: this.operator.value,
      group: this.group.value,
      subgroup: this.subgroup.value,
      description: this.description.value,
      vehicletype: this.vehicletype.value,
      enginetype: this.enginetype.value,
      licenseid: this.licenseid.value,
      customer: this.customer.value,
      driver1: this.driver1.value,
      driver2: this.driver2.value,
      comments: this.comments.value
    };
    this.protoService.addProto(newProto);
  }

  PROTO_DATA = [];

  getProtos(){
    this.PROTO_DATA = this.protoService.get();
  }

}
