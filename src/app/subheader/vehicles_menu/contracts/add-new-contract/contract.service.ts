import { Injectable } from '@angular/core';
import { Contract } from './contract'

@Injectable()
export class ContractService {

  constructor() { }

  contractTypes = [
    'Type 1',
    'Type 2',
    'Type 3',
    'Type 4',
    'Type 5',
  ]

  contracts: Array<Contract>

  getContracts(){
    return this.contractTypes
  }

  addContract(contract: Contract){
    this.contracts.push(contract)
  }

}