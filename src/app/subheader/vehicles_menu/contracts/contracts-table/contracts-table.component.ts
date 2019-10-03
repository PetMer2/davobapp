import {
    Component,
    OnInit
} from '@angular/core';

import {
  MatTableDataSource
} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface Contract {
  contract : string;
  protoid : number;
  customer : string;
  creator : string;
  coordinator : string;
  contracttype : string;
  sidelettertype : string;
  testcomponents : string;
  startdate : string;
  enddate : string;
  amount : number;
  contractstatus : string;
}

const CONTRACT_DATA: Contract [] = [
{contract : 'contract',
protoid : 1,
customer : 'customer',
creator : 'creator',
coordinator : 'coordinator',
contracttype : 'type',
sidelettertype : 'type',
testcomponents : 'component',
startdate : new Date(1994,5,23).toDateString(),
enddate : new Date(1994,5,23).toDateString(),
amount : 500,
contractstatus : 'status'},
{contract : 'contract',
protoid : 1,
customer : 'customer',
creator : 'creator',
coordinator : 'coordinator',
contracttype : 'type',
sidelettertype : 'type',
testcomponents : 'component',
startdate : new Date(1994,5,23).toDateString(),
enddate : new Date(1994,5,23).toDateString(),
amount : 500,
contractstatus : 'status'},
{contract : 'contract',
protoid : 1,
customer : 'customer',
creator : 'creator',
coordinator : 'coordinator',
contracttype : 'type',
sidelettertype : 'type',
testcomponents : 'component',
startdate : new Date(1994,5,23).toDateString(),
enddate : new Date(1994,5,23).toDateString(),
amount : 500,
contractstatus : 'status'},
{contract : 'contract',
protoid : 1,
customer : 'customer',
creator : 'creator',
coordinator : 'coordinator',
contracttype : 'type',
sidelettertype : 'type',
testcomponents : 'component',
startdate : new Date(1994,5,23).toDateString(),
enddate : new Date(1994,5,23).toDateString(),
amount : 500,
contractstatus : 'status'},
]



@Component({
  selector: 'app-contracts-table',
  templateUrl: './contracts-table.component.html',
  styleUrls: ['./contracts-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],  
})
export class ContractsTableComponent implements OnInit {

   constructor() {}

    ngOnInit() {}

    columnsToDisplay: string[] = [
'contract', 'protoid', 'customer', 'creator',
'coordinator', 'contracttype', 'sidelettertype', 'testcomponents',
'startdate', 'enddate', 'amount', 'contractstatus'
    ];
    dataSource = new MatTableDataSource(CONTRACT_DATA);

    applyFilter (filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}