import { Injectable } from '@angular/core';

@Injectable()
export class ReportsService {

  constructor() { }
getReports() {
    return this.REPORTS;
  }

  getCustomQueryParameters(){
    return this.customQueryParameters;
  }

  REPORTS: Report[] = [
  {
    name: 'Vehicle Info',
    description: 'Vehicle Parameters Overview and Maximum Measured Values for Selected Vehicles between StartDate and EndDate.'
  },
  {
    name: 'VehicleUsage',
    description: 'Usage parameters for selected vehicles between StartDate and EndDate.'
  },
  {
    name: 'DM1_Chart',
    description: 'Overview of different DM1 messages on selected vehicles occured between StartDate and EndDate'
  },
  {
    name: 'DM1_Overview',
    description: 'List of DM1 messages with Measurement references and Trip Summary between StartDate and EndDate.'
  },
  {
    name: 'DM1_Messages',
    description: 'List of DM1 Messages with Dashlight Information between StartDate and EndDate.'
  },
  {
    name: 'DM1_Undefined',
    description: 'List of Undefined DM1 Messages with Dashlight Information between StartDate and EndDate.'
  },
  {
    name: 'AebsInfo',
    description: 'Overview of KeyCycles with AEBS Event(s) related to PeriodDistance and Loaded AEBS software.'
  },
  {
    name: 'AebsTripEvents',
    description: 'Overview of AEBS Events between StartDate and EndDate.'
  },
   {
    name: 'AebsNotifications',
    description: 'Overview of latest AEBS Notifications.'
  },
  {
    name: 'KeyInfo',
    description: 'KeyCycles Information and Measurement files references between StartDate and EndDate.'
  },
  {
    name: 'TripInfo',
    description: 'Trip Information of selected vehicles between StartDate and EndDate.'
  },
  {
    name: 'DM1_Counter',
    description: "Unique DM1's and KeyCycles/KeyOnTime Counters between StartDate and EndDate.'"
  },
  {
    name: 'BEM_KeyInfo',
    description: 'Overview of Battery Energy Monitor labels per KeyCycle.'
  },
  {
    name: 'BEM_TripInfo',
    description: 'Overview of Battery Energy Monitor labels per Trip.'
  },
  {
    name: 'Period_DashlightsChart',
    description: 'Trip Information of selected vehicles between StartDate and EndDate.'
  },
  {
    name: 'Period_Dashlights',
    description: 'Overview of dashlights in a period on CAN1.'
  },
]

customQueryParameters = [
  'GeoFence',
  'Fracas Lookup'
]

}

export interface Report {
  name: string,
  description: string;
}