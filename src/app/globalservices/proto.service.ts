import { Injectable } from '@angular/core';

@Injectable()
export class ProtoService {

  constructor() { }

  get(){
    return this.PROTO_DATA;
  }

  addProto(newProto){
    this.PROTO_DATA.push(newProto);
  }

  PROTO_DATA: Proto[] = [{
            proto: 1,
            operator: 'Operator 1',
            group: 'Group 1',
            subgroup: 'Subgroup 1',
            description: 'Edit this vehicle',
            vehicletype: 'Vehicle Type 1',
            enginetype: 'Engine Type 1',
            licenseid: '123456',
            customer: 'Customer 1',
            driver1: 'Driver 1',
            driver2: 'Driver 2',
            comments: 'Example comment',
            edit: false,
            report: false
        },
        {
            proto: 2,
            operator: 'Operator 1',
            group: 'Group 1',
            subgroup: 'Subgroup 1',
            description: 'Edit this vehicle',
            vehicletype: 'Vehicle Type 1',
            enginetype: 'Engine Type 1',
            licenseid: '123456',
            customer: 'Customer 1',
            driver1: 'Driver 1',
            driver2: 'Driver 2',
            comments: 'Example comment',
            edit: false,
            report: false
        },
        {
            proto: 3,
            operator: 'Operator 1',
            group: 'Group 1',
            subgroup: 'Subgroup 1',
            description: 'Edit this vehicle',
            vehicletype: 'Vehicle Type 1',
            enginetype: 'Engine Type 1',
            licenseid: '123456',
            customer: 'Customer 1',
            driver1: 'Driver 1',
            driver2: 'Driver 2',
            comments: 'Example comment',
            edit: false,
            report: false
        },
        {
            proto: 4,
            operator: 'Operator 1',
            group: 'Group 1',
            subgroup: 'Subgroup 1',
            description: 'Edit this vehicle',
            vehicletype: 'Vehicle Type 1',
            enginetype: 'Engine Type 1',
            licenseid: '123456',
            customer: 'Customer 1',
            driver1: 'Driver 1',
            driver2: 'Driver 2',
            comments: 'Example comment',
            edit: false,
            report: false
        },
    ];
}

export interface Proto {
    proto: number;
    operator: string;
    group: string;
    subgroup: string;
    description: string;
    vehicletype: string;
    enginetype: string;
    licenseid: string;
    customer: string;
    driver1: string;
    driver2: string;
    comments: string;
    edit: boolean;
    report: boolean;
}
