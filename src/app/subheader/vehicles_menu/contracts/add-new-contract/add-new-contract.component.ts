import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Contract } from './contract'

import { ContractService } from './contract.service';
import { ProtoService } from '../../../../globalservices/proto.service';
import { ManagerService } from '../../../../globalservices/manager.service';
import { CoordinatorService } from '../../../../globalservices/coordinator.service';
import { OperatorService } from '../../../../globalservices/operator.service';
import { CustomerService } from '../../../../globalservices/customer.service';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-add-new-contract',
  templateUrl: './add-new-contract.component.html',
  styleUrls: ['./add-new-contract.component.css']
})
export class AddNewContractComponent implements OnInit {

  constructor(
    private contractService: ContractService,
    private protoService: ProtoService,
    private managerService: ManagerService,
    private coordinatorService: CoordinatorService,
    private operatorService: OperatorService,
    private customerService: CustomerService,
    private contactsService: ContactsService
  ) { }

  contracts = []
  protos = []
  managers = []
  coordinators = []
  operators = []
  customers = []
  contacts = []

  ngOnInit() {
    this.contracts = this.contractService.getContracts();
    this.protos = this.protoService.get();
    this.managers = this.managerService.getManagers();
    this.coordinators = this.coordinatorService.getCoordinators();
    this.operators = this.operatorService.getOperators();
    this.customers = this.customerService.getCustomers();
    this.contacts = this.contactsService.getContacts();
  }

  contractType = new FormControl();
  protoID = new FormControl();
  manager = new FormControl();
  coordinator = new FormControl();
  operator = new FormControl();
  customer = new FormControl();
  contact1 = new FormControl();
  contact2 = new FormControl();
  testComponents = new FormControl();
  comments = new FormControl();
  creator = new FormControl();
  datetime = new FormControl();

  formContract(): Contract {
    return new Contract (
      contractType.value,
      protoID.value,
      manager.value,
      coordinator.value,
      operator.value,
      customer.value,
      contact1.value,
      contact2.value,
      testComponents.value,
      comments.value,
      creator.value,
      datetime.value
    )
  }

  submitContract(){
    let contract = this.formContract();
    this.contractService.addContract(contract);
  }

}