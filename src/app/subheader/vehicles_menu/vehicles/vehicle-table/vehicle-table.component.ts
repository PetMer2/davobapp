import {
    Component,
    OnInit
} from '@angular/core';
import {
    MatTableDataSource
} from '@angular/material/table';
import {
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';
import {
    FormControl
} from '@angular/forms';

import {
  ReportsService
} from '../../../../globalservices/reports.service';

import {
  ProtoService
} from '../../../../globalservices/proto.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-vehicle-table',
    templateUrl: './vehicle-table.component.html',
    styleUrls: ['./vehicle-table.component.css'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({
                height: '0px',
                minHeight: '0'
            })),
            state('expanded', style({
                height: '*'
            })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})

export class VehicleTableComponent implements OnInit {

    constructor(
      private reportService : ReportsService, private _snackBar : MatSnackBar,
      private protoService : ProtoService
      ) {}

    reports = []

    ngOnInit() {
      this.reports = this.reportService.getReports();
    }

    columnsToDisplay = [
        'proto', 'operator', 'group', 'subgroup',
        'vehicletype', 'enginetype', 'licenseid', 'customer',
        'driver1', 'driver2', 'comments',
    ];

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

    dataSource = new MatTableDataSource(this.PROTO_DATA);
    expandedElement: Proto | null;

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    protoid = new FormControl();
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
    reportType = new FormControl();

    openSnackBar() {
    this._snackBar.open('Vehicle updated succesfully', 'Success', {
      duration: 2000,
    });
    };

    update(edited_proto: number) {
      //Locate the right proto
        for (let i = 0; i < this.PROTO_DATA.length; i++) {
            if (this.PROTO_DATA[i].proto == edited_proto) {
              //Update the fields that changed values
                if (this.protoid.value !== null) {
                    this.PROTO_DATA[i].proto = parseInt(this.protoid.value);
                };
                console.log(this.operator.value);
                if (this.operator.value !== null) {
                    this.PROTO_DATA[i].operator = this.operator.value;
                };
                console.log(this.group.value);
                if (this.group.value !== null) {
                    this.PROTO_DATA[i].group = this.group.value;
                };
                console.log(this.subgroup.value);
                if (this.subgroup.value !== null) {
                    this.PROTO_DATA[i].subgroup = this.subgroup.value;
                };
                if (this.vehicletype.value !== null) {
                    this.PROTO_DATA[i].vehicletype = this.vehicletype.value;
                };
                if (this.enginetype.value !== null) {
                    this.PROTO_DATA[i].enginetype = this.enginetype.value;
                };
                if (this.licenseid.value !== null) {
                    this.PROTO_DATA[i].licenseid = this.licenseid.value;
                };
                if (this.customer.value !== null) {
                    this.PROTO_DATA[i].proto = this.customer.value;
                };
                if (this.driver1.value !== null) {
                    this.PROTO_DATA[i].driver1 = this.driver1.value;
                };
                if (this.driver2.value !== null) {
                    this.PROTO_DATA[i].driver2 = this.driver2.value;
                };
                if (this.comments.value !== null) {
                    this.PROTO_DATA[i].comments = this.comments.value;
                };
               //Close the edit tab
               this.PROTO_DATA[i].edit = false; 
            }
        }
    }

    displayEditTab(chosenProto: number){
      for(let i = 0 ; i < this.PROTO_DATA.length ; i++){
        if (this.PROTO_DATA[i].proto == chosenProto){
          let proto = this.PROTO_DATA[i]
          //Check whether 'report' tab is opened
          if (proto.report == true) {
            //If opened, close it and open edit tab
            proto.report = false;
            //If reports tab already opened - close it, else open it
            proto.edit ? proto.edit = false : proto.edit = true;
          }//Else reports tab is not opened, and just open/close edit tab
          else {
            proto.edit ? proto.edit = false : proto.edit = true;
          }
        }
      }
    }

    displayReportsTab(chosenProto: number){
      //Get the proto from the Proto data source and assign it to temporary variable
      for(let i = 0 ; i < this.PROTO_DATA.length ; i++){
        if (this.PROTO_DATA[i].proto == chosenProto){
          let proto = this.PROTO_DATA[i]
          //Check whether 'edit' tab is opened
          if (proto.edit == true) {
            //If opened, close it and open reports tab
            proto.edit = false;
            //If reports tab already opened - close it, else open it
            proto.report ? proto.report = false : proto.report = true;
          }//Else edit tab is not opened, and just open/close reports tab
          else {
            proto.report ? proto.report = false : proto.report = true;
          }
        }
      }
    }

    refreshProtoTable(){
      this.PROTO_DATA = this.protoService.get();
    }
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