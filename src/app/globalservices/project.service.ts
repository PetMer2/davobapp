import { Injectable } from '@angular/core';
import { Project } from './project'

@Injectable()
export class ProjectService {

  constructor() { }

  /* In PROD version substitute it for HTTP request */

  projects: Array<Project> = []

  addProject(project: Project){
    this.projects.push(project)
  }

  getProjects() {
    return this.projects
  }

}