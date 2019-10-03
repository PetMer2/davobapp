import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],  
})
export class ProjectsTableComponent implements OnInit {

 constructor(private _snackBar: MatSnackBar) {}

    ngOnInit() {}

    columnsToDisplay = [
    'project', 'projectname', 'description', 'coordinator', 
    'startdate','enddate', 'vehicles'
    ];
    dataSource = new MatTableDataSource(PROJECT_DATA);
    expandedElement: Project | null;

    applyFilter (filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openSnackBar() {
    this._snackBar.open('Project updated succesfully', 'Success', {
      duration: 2000,
    });
  };


    update(chosenProject: string){
      //Locate the right project
      for(let i = 0 ; i < PROJECT_DATA.length ; i++){
        if(PROJECT_DATA[i].project == chosenProject){
          //Assign it to temporary variable
          let selectedProject = PROJECT_DATA[i];
          //Update the fields that changed value
          if (this.project.value != null){
            selectedProject.project = this.project.value;
          };
          if(this.projectname.value != null){
            selectedProject.projectname = this.projectname.value;
          };
          if (this.description.value != null){
            selectedProject.description = this.description.value;
          };
          if (this.coordinator.value != null){
            selectedProject.coordinator = this.coordinator.value;
          };
          if (this.enddate.value != null){
            selectedProject.enddate = this.enddate.value;
          };
          if (this.startdate.value != null){
            selectedProject.startdate = this.startdate.value;
          };
          if (this.vehicles.value != null){
            let vehiclesArray = this.vehicles.value.split(',');
            for (var vehicle in vehiclesArray){
              vehicle = vehicle.trim();
            };
            selectedProject.vehicles = vehiclesArray;
          };
          //Close the edit tab
          selectedProject.edit = false;
        }
      }
    }

    project = new FormControl();
    projectname = new FormControl();
    description = new FormControl();
    coordinator = new FormControl();
    enddate = new FormControl();
    startdate = new FormControl();
    vehicles = new FormControl();

}

export interface Project {
project : string,
projectname : string,
description : string,
coordinator : string,
startdate : string,
enddate : string,
vehicles : number[],
edit: boolean
}

const PROJECT_DATA : Project[] = [
  {
  project : 'Project 1',
  projectname : 'Name 1',
  description : 'Description',
  coordinator : 'Coordinator 1',
  startdate : new Date(1994, 1, 1).toDateString(),
  enddate : new Date(1994, 1, 1).toDateString(),
  vehicles : [1,2,3,4,5],
  edit: false
  },
  {
  project : 'Project 2',
  projectname : 'Name 1',
  description : 'Description',
  coordinator : 'Coordinator 1',
  startdate : new Date(1994, 1, 1).toDateString(),
  enddate : new Date(1994, 1, 1).toDateString(),
  vehicles : [1,2,3,4,5],
  edit: false
  },
  {
  project : 'Project 3',
  projectname : 'Name 1',
  description : 'Description',
  coordinator : 'Coordinator 1',
  startdate : new Date(1994, 1, 1).toDateString(),
  enddate : new Date(1994, 1, 1).toDateString(),
  vehicles : [1,2,3,4,5],
  edit: false
  },
  {
  project : 'Project 4',
  projectname : 'Name 1',
  description : 'Description',
  coordinator : 'Coordinator 1',
  startdate : new Date(1994, 1, 1).toDateString(),
  enddate : new Date(1994, 1, 1).toDateString(),
  vehicles : [1,2,3,4,5],
  edit: false
  },
  {
  project : 'Project 5',
  projectname : 'Name 1',
  description : 'Description',
  coordinator : 'Coordinator 1',
  startdate : new Date(1994, 1, 1).toDateString(),
  enddate : new Date(1994, 1, 1).toDateString(),
  vehicles : [1,2,3,4,5],
  edit: false
  },
]