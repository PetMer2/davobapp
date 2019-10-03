import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Testfunction } from './testfunction';

import { ProjectService } from '../../../../globalservices/project.service';
import { TracksService } from '../../../../globalservices/tracks.service';
import { CoordinatorService } from '../../../../globalservices/coordinator.service';
import { TestfunctionService } from '../../../../globalservices/testfunction.service';

@Component({
  selector: 'app-add-test-function',
  templateUrl: './add-test-function.component.html',
  styleUrls: ['./add-test-function.component.css']
})
export class AddTestFunctionComponent implements OnInit {

  constructor(
    private projectService: ProjectService,
    private tracksService: TracksService,
    private coordinatorService: CoordinatorService,
    private testfunctionService: TestfunctionService
  ) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.tracks = this.tracksService.getTracks();
    this.coordinators = this.coordinatorService.getCoordinators();
  }
  
  scaleFactors = ['1','2','3','4','5','6']
  projects = []
  tracks = []
  coordinators = []
  statuses = ['Active', 'Inactive']


  name = new FormControl();
  description = new FormControl();
  projectID = new FormControl();
  tracksID = new FormControl();
  dateStart = new FormControl();
  dateEnd = new FormControl();
  distance = new FormControl();
  scaleFactor = new FormControl();
  contractOption = new FormControl();
  mtbfOption = new FormControl();
  kmgraphOption = new FormControl();
  subgroupOption = new FormControl();
  coordinator = new FormControl();
  status = new FormControl();
  comments = new FormControl();

  formTestfunction(): Testfunction {
    return new Testfunction (
      this.name.value,
      this.description.value,
      this.projectID.value,
      this.tracksID.value,
      this.dateStart.value,
      this.dateEnd.value,
      this.distance.value,
      this.scaleFactor.value,
      this.contractOption.value,
      this.mtbfOption.value,
      this.kmgraphOption.value,
      this.subgroupOption.value,
      this.coordinator.value,
      this.status.value,
      this.comments.value
    )
  }

  submitTestfunction(){
    let testfunction = this.formTestfunction();
    this.testfunctionService.addTestfunction(testfunction)
  }



}