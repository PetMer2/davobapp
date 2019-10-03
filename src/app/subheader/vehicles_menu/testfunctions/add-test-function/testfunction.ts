export class Testfunction {

  /* Fields */

  name: string;
  description: string;
  projectID: string;
  tracksID: string;
  dateStart: string;
  dateEnd: string;
  distance: string;
  scaleFactor: string;
  contractOption: string;
  mtbfOption: string;
  kmgraphOption: string;
  subgroupOption: string;
  coordinator: string;
  status: string;
  comments: string;

  constructor (
  name: string,
  description: string,
  projectID: string,
  tracksID: string,
  dateStart: string,
  dateEnd: string,
  distance: string,
  scaleFactor: string,
  contractOption: string,
  mtbfOption: string,
  kmgraphOption: string,
  subgroupOption: string,
  coordinator: string,
  status: string,
  comments: string,
  ){
    this.name = name,
    this.description = description,
    this.projectID = projectID,
    this.tracksID = tracksID,
    this.dateStart = dateStart,
    this.dateEnd = dateEnd,
    this.distance = distance,
    this.scaleFactor = scaleFactor,
    this.contractOption = contractOption,
    this.mtbfOption = mtbfOption,
    this.kmgraphOption = kmgraphOption,
    this.subgroupOption = subgroupOption,
    this.coordinator = coordinator,
    this.status = status,
    this.comments = comments
  }

}