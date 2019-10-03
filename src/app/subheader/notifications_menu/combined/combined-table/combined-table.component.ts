import { Component, OnInit } from '@angular/core';
import {
  MatTableDataSource
} from '@angular/material/table';

export interface Proto {
    proto: string;
    operator: string;
    group: string;
    subgroup: string;
    vehicleType: string;
    engineType: string;
    licenseID: string;
    customer: string;
    driver1: string;
    driver2: string;
    comments: string;
}

const PROTO_DATA: Proto[] = [{
        proto: '1',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '2',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '3',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '4',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '5',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '6',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '7',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '8',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '9',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '10',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '11',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '12',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '13',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '14',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '15',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Example',
        licenseID: 'Test',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
    {
        proto: '16',
        operator: 'Example',
        group: '1.0079',
        subgroup: 'H',
        vehicleType: 'Example',
        engineType: 'Test',
        licenseID: 'Example',
        customer: 'Example',
        driver1: 'Example',
        driver2: 'Example',
        comments: 'Example'
    },
];


@Component({
  selector: 'app-combined-table',
  templateUrl: './combined-table.component.html',
  styleUrls: ['./combined-table.component.css']
})
export class CombinedTableComponent implements OnInit {

  constructor() {}

    ngOnInit() {}

    displayedColumns: string[] = ['Proto', 'Operator', 'Group', 'SubGroup', 'Vehicle Type', 'Engine Type',
        'License ID', 'Customer', 'Driver 1', 'Driver 2', 'Comments'
    ];
    dataSource = new MatTableDataSource(PROTO_DATA);

    applyFilter (filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}