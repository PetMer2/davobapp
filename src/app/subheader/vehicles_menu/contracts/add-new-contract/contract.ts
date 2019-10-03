export class Contract {

  contractType: string;
  protoID: string;
  manager: string;
  coordinator: string;
  operator: string;
  customer: string;
  contact1: string;
  contact2: string;
  testComponents: string;
  comments: string;
  creator: string;
  datetime: Date;

  constructor(
  contractType: string,
  protoID: string,
  manager: string,
  coordinator: string,
  operator: string,
  customer: string,
  contact1: string,
  contact2: string,
  testComponents: string,
  comments: string,
  creator: string,
  datetime: Date,
  ){
    this.contractType = contractType;
    this.protoID = protoID;
    this.manager = manager;
    this.coordinator = coordinator;
    this.operator = operator;
    this.customer = customer;
    this.contact1 = contact1;
    this.contact2 = contact2;
    this.testComponents = testComponents;
    this.comments = comments;
    this.creator = creator;
    this.datetime = datetime;
  }


}