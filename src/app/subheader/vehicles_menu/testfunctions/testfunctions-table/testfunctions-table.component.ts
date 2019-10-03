import {
    Component,
    OnInit
} from '@angular/core';

import {
  MatTableDataSource
} from '@angular/material/table';


export interface TestFunction {
  name : string;
  description : string;
  project : string;
  tracks : string;
  coordinator : string;
  scalefactor : number;
  startdate : string;
  enddate : string;
  protos : number[];
}

const TESTFUNCTION_DATA : TestFunction [] = [
{
  name : 'name',
description : 'description',
project : 'project',
tracks : '123456/abc',
coordinator : 'Coordinator',
scalefactor : 1,
startdate : new Date(1994,1,1).toDateString(),
enddate : new Date(1994,1,1).toDateString(),
protos : [1,2,3,4,5]
},
{
  name : 'name',
description : 'description',
project : 'project',
tracks : '123456/abc',
coordinator : 'Coordinator',
scalefactor : 1,
startdate : new Date(1994,1,1).toDateString(),
enddate : new Date(1994,1,1).toDateString(),
protos : [1,2,3,4,5]
},
{
  name : 'name',
description : 'description',
project : 'project',
tracks : '123456/abc',
coordinator : 'Coordinator',
scalefactor : 1,
startdate : new Date(1994,1,1).toDateString(),
enddate : new Date(1994,1,1).toDateString(),
protos : [1,2,3,4,5]
},
{
  name : 'name',
description : 'description',
project : 'project',
tracks : '123456/abc',
coordinator : 'Coordinator',
scalefactor : 1,
startdate : new Date(1994,1,1).toDateString(),
enddate : new Date(1994,1,1).toDateString(),
protos : [1,2,3,4,5]
},
{
  name : 'name',
description : 'description',
project : 'project',
tracks : '123456/abc',
coordinator : 'Coordinator',
scalefactor : 1,
startdate : new Date(1994,1,1).toDateString(),
enddate : new Date(1994,1,1).toDateString(),
protos : [1,2,3,4,5]
},
{
  name : 'name',
description : 'description',
project : 'project',
tracks : '123456/abc',
coordinator : 'Coordinator',
scalefactor : 1,
startdate : new Date(1994,1,1).toDateString(),
enddate : new Date(1994,1,1).toDateString(),
protos : [1,2,3,4,5]
},

]

@Component({
  selector: 'app-testfunctions-table',
  templateUrl: './testfunctions-table.component.html',
  styleUrls: ['./testfunctions-table.component.css']
})
export class TestfunctionsTableComponent implements OnInit {

   constructor() {}

    ngOnInit() {}

    columnsToDisplay: string[] = [
'name', 'description', 'project', 'tracks', 'coordinator',
'scalefactor', 'startdate', 'enddate', 'protos'
];
    dataSource = new MatTableDataSource(TESTFUNCTION_DATA);

    applyFilter (filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}