import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReportService } from './report.service';
import { ProtoService } from '../../../globalservices/proto.service'

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {

  // Table data
  dataSource = [];
  protos = [];
  customQueryParameters = [];

  customParametersFormControl = new FormControl();
  protoFormControl = new FormControl();
  reportType = new FormControl();
  startDate = new FormControl();
  endDate = new FormControl();

  displayedColumns: string[] = ['name', 'description'];

  constructor(private reportService: ReportService, private protoService: ProtoService) { }

  ngOnInit() {
    this.dataSource = this.reportService.getReports();
    this.customQueryParameters = this.reportService.getCustomQueryParameters();
    this.protos = this.protoService.get();
  }
}

