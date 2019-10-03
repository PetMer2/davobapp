import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Project } from '../../../../globalservices/project';

import { CoordinatorService } from '../../../../globalservices/coordinator.service';
import { ProjectService } from '../../../../globalservices/project.service';


@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css']
})
export class AddNewProjectComponent implements OnInit {

  constructor(
              private coordinatorService: CoordinatorService,
              private projectService: ProjectService
  ){
  }

  ngOnInit() {
    this.coordinators = this.coordinatorService.getCoordinators()
  }

  coordinators = []
  statuses = [
    'Active',
    'Closed',
    'Inactive'
  ]
  projects = []

  /* Form Controls */
  projectID = new FormControl();
  projectName = new FormControl();
  projectDescription = new FormControl();
  projectDavobFilter = new FormControl();
  projectStartDate = new FormControl();
  projectEndDate = new FormControl();
  projectCoordinator = new FormControl();
  projectStatus = new FormControl();

  /* Add Project */
  /* Step 1 - Create a new project */

  formProject(): Project {

    return new Project(
      this.projectID.value,
      this.projectName.value,
      this.projectDescription.value,
      this.projectDavobFilter.value,
      this.projectStartDate.value,
      this.projectEndDate.value,
      this.projectCoordinator.value,
      this.projectStatus.value
    )
  }

  /*Step 2 - Submit a new project*/

  submitProject(){
    let project = this.formProject();
    this.projectService.addProject(project)
  }

  /* Get all projects */
  getProjects(){
    this.projects = this.projectService.getProjects();
  }

}

