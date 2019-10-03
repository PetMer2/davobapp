export class Project {

  /* Fields */
  projectID: string;
  projectName: string;
  projectDescription: string;
  projectDavcbFilter: string;
  projectStartDate: Date;
  projectEndDate: Date;
  projectCoordinator: string;
  projectStatus: string;

  /* Constructor */

  constructor(
  projectID: string,
  projectName: string,
  projectDescription: string,
  projectDavcbFilter: string,
  projectStartDate: Date,
  projectEndDate: Date,
  projectCoordinator: string,
  projectStatus: string,
  ){
    this.projectID = projectID,
    this.projectName = projectName,
    this.projectDescription = projectDescription,
    this.projectDavcbFilter = projectDavcbFilter,
    this.projectStartDate = projectStartDate,
    this.projectEndDate = projectEndDate,
    this.projectCoordinator = projectCoordinator,
    this.projectStatus = projectStatus
  }
}