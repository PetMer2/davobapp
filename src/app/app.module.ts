import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SelectAutocompleteModule } from 'select-autocomplete';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { VehiclesComponent } from './subheader/vehicles_menu/vehicles/vehicles.component';
import { ProjectsComponent } from './subheader/vehicles_menu/projects/projects.component';
import { TestfunctionsComponent } from './subheader/vehicles_menu/testfunctions/testfunctions.component';
import { ContractsComponent } from './subheader/vehicles_menu/contracts/contracts.component';
import { DealersComponent } from './subheader/vehicles_menu/dealers/dealers.component';
import { CustomersComponent } from './subheader/vehicles_menu/customers/customers.component';
import { DriversComponent } from './subheader/vehicles_menu/drivers/drivers.component';
import { VehSoftwareComponent } from './subheader/software_menu/veh-software/veh-software.component';
import { AddNewVehComponent } from './subheader/vehicles_menu/vehicles/add-new-veh/add-new-veh.component';
import { AddNewProjectComponent } from './subheader/vehicles_menu/projects/add-new-project/add-new-project.component';
import { AddTestFunctionComponent } from './subheader/vehicles_menu/testfunctions/add-test-function/add-test-function.component';
import { AddNewContractComponent } from './subheader/vehicles_menu/contracts/add-new-contract/add-new-contract.component';
import { VehicleTableComponent } from './subheader/vehicles_menu/vehicles/vehicle-table/vehicle-table.component';
import { ProjectsTableComponent } from './subheader/vehicles_menu/projects/projects-table/projects-table.component';
import { TestfunctionsTableComponent } from './subheader/vehicles_menu/testfunctions/testfunctions-table/testfunctions-table.component';
import { ContractsTableComponent } from './subheader/vehicles_menu/contracts/contracts-table/contracts-table.component';
import { DealersTableComponent } from './subheader/vehicles_menu/dealers/dealers-table/dealers-table.component';
import { CustomersTableComponent } from './subheader/vehicles_menu/customers/customers-table/customers-table.component';
import { DriversTableComponent } from './subheader/vehicles_menu/drivers/drivers-table/drivers-table.component';
import { SoftwareTableComponent } from './subheader/software_menu/veh-software/software-table/software-table.component';
import { ReportsComponent } from './subheader/reports/reports/reports.component';
import { ReportService } from './subheader/reports/reports/report.service';
import { ProtoService } from './globalservices/proto.service';
import { AddnewdealerComponent } from './subheader/vehicles_menu/dealers/addnewdealer/addnewdealer.component';
import { AddNewCustomerComponent } from './subheader/vehicles_menu/customers/add-new-customer/add-new-customer.component';
import { AddNewEcuComponent } from './subheader/software_menu/ecus/add-new-ecu/add-new-ecu.component';
import { EcuTableComponent } from './subheader/software_menu/ecus/ecu-table/ecu-table.component';
import { AddNewSoftwareComponent } from './subheader/software_menu/veh-software/add-new-software/add-new-software.component';
import { AddNewValidatorComponent } from './subheader/software_menu/software-validator/add-new-validator/add-new-validator.component';
import { AddNewErrorComponent } from './subheader/errors_menu/add-new-error/add-new-error.component';
import { CoordinatorService } from './globalservices/coordinator.service';
import { ProjectService } from './globalservices/project.service';
import { ContractService } from './subheader/vehicles_menu/contracts/add-new-contract/contract.service';
import { ManagerService } from './globalservices/manager.service';
import { OperatorService } from './globalservices/operator.service';
import { CustomerService } from './globalservices/customer.service';
import { ContactsService } from './subheader/vehicles_menu/contracts/add-new-contract/contacts.service';
import { TracksService } from './globalservices/tracks.service';
import { TestfunctionService } from './globalservices/testfunction.service';
import { DealerService } from './globalservices/dealer.service';
import { AddNewDriverComponent } from './subheader/vehicles_menu/drivers/add-new-driver/add-new-driver.component';
import { DriverService } from './globalservices/driver.service';
import { AddDataloggerComponent } from './subheader/datalogger_menu/dataloggers/add-datalogger/add-datalogger.component';
import { DataloggerTableComponent } from './subheader/datalogger_menu/dataloggers/datalogger-table/datalogger-table.component';
import { AddCfcardComponent } from './subheader/datalogger_menu/cf-cards/add-cfcard/add-cfcard.component';
import { CfcardsTableComponent } from './subheader/datalogger_menu/cf-cards/cfcards-table/cfcards-table.component';
import { AddCameraComponent } from './subheader/datalogger_menu/cameras/add-camera/add-camera.component';
import { CamerasTableComponent } from './subheader/datalogger_menu/cameras/cameras-table/cameras-table.component';
import { AddMeasurementComponent } from './subheader/datalogger_menu/measurements/add-measurement/add-measurement.component';
import { MeasurementTableComponent } from './subheader/datalogger_menu/measurements/measurement-table/measurement-table.component';
import { AddPRouterComponent } from './subheader/datalogger_menu/pcan_routers/add-p-router/add-p-router.component';
import { ProuterTableComponent } from './subheader/datalogger_menu/pcan_routers/prouter-table/prouter-table.component';
import { AddSimcardComponent } from './subheader/datalogger_menu/sim_cards/add-simcard/add-simcard.component';
import { SimcardTableComponent } from './subheader/datalogger_menu/sim_cards/simcard-table/simcard-table.component';
import { AddNotificationComponent } from './subheader/notifications_menu/notification/add-notification/add-notification.component';
import { NotificationTableComponent } from './subheader/notifications_menu/notification/notification-table/notification-table.component';
import { AddLogComponent } from './subheader/notifications_menu/logbook/add-log/add-log.component';
import { LogTableComponent } from './subheader/notifications_menu/logbook/log-table/log-table.component';
import { AddRemarkComponent } from './subheader/notifications_menu/remarks/add-remark/add-remark.component';
import { RemarksTableComponent } from './subheader/notifications_menu/remarks/remarks-table/remarks-table.component';
import { AddTrackComponent } from './subheader/notifications_menu/tracks/add-track/add-track.component';
import { TracksTableComponent } from './subheader/notifications_menu/tracks/tracks-table/tracks-table.component';
import { AddFracasComponent } from './subheader/notifications_menu/fracas/add-fracas/add-fracas.component';
import { FracasTableComponent } from './subheader/notifications_menu/fracas/fracas-table/fracas-table.component';
import { AddEwarpComponent } from './subheader/notifications_menu/ewarp/add-ewarp/add-ewarp.component';
import { EwarpTableComponent } from './subheader/notifications_menu/ewarp/ewarp-table/ewarp-table.component';
import { AddCombinedComponent } from './subheader/notifications_menu/combined/add-combined/add-combined.component';
import { CombinedTableComponent } from './subheader/notifications_menu/combined/combined-table/combined-table.component';
import { ErrorsTableComponent } from './subheader/errors_menu/errors-table/errors-table.component';
import { BackgroundComponentComponent } from './background-component/background-component.component';
import { ReportsService } from './globalservices/reports.service';
import { ReportTemplateComponent } from './report-template/report-template.component';

const appRoutes: Routes = [
  { path: 'vehicles' , component: VehiclesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'testfunctions', component: TestfunctionsComponent },
  { path: 'contracts', component: ContractsComponent },
  { path: 'dealers', component: DealersComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'addvehicle', component: AddNewVehComponent },
  { path: 'addproject', component: AddNewProjectComponent },
  { path: 'addtestfunction', component: AddTestFunctionComponent },
  { path: 'addcontract', component: AddNewContractComponent },
  { path: 'vehiclestable', component: VehicleTableComponent},
  { path: 'projectstable', component: ProjectsTableComponent },
  { path: 'testfunctionstable', component: TestfunctionsTableComponent },
  { path: 'contractstable', component: ContractsTableComponent },
  { path: 'dealerstable', component: DealersTableComponent },
  { path: 'customerstable', component: CustomersTableComponent },
  { path: 'driverstable', component: DriversTableComponent },
  { path: 'vehsoftwaretable', component: SoftwareTableComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'adddealer', component: AddnewdealerComponent },
  { path: 'addcustomer', component: AddNewCustomerComponent },
  { path: 'addecu', component: AddNewEcuComponent },
  { path: 'addsoftware', component: AddNewSoftwareComponent },
  { path: 'addvalidator', component: AddNewValidatorComponent },
  { path: 'ecutable', component: EcuTableComponent },
  { path: 'adderror', component: AddNewErrorComponent },
  { path: 'errortable', component: ErrorsTableComponent },
  { path: 'adddriver', component: AddNewDriverComponent },
  { path: 'addnotification', component: AddNotificationComponent },
  { path: 'notificationtable', component: NotificationTableComponent},
  { path: 'addlog', component: AddLogComponent },
  { path: 'logtable', component: LogTableComponent },
  { path: 'addremark', component: AddRemarkComponent },
  { path: 'remarkstable', component: RemarksTableComponent },
  { path: 'addtrack', component: AddTrackComponent },
  { path: 'tracktable', component: TracksTableComponent },
  { path: 'addfracas', component: AddFracasComponent },
  { path: 'fracastable', component: FracasTableComponent },
  { path: 'addewarp', component: AddEwarpComponent },
  { path: 'ewarptable', component: EwarpTableComponent},
  { path: 'addcombined', component: AddCombinedComponent },
  { path: 'combinedtable', component: CombinedTableComponent },
  { path: 'addcamera', component: AddCameraComponent },
  { path: 'cameratable', component: CamerasTableComponent },
  { path: 'addcfcard', component: AddCfcardComponent },
  { path: 'cfcardtable', component: CfcardsTableComponent },
  { path: 'addlogger', component: AddDataloggerComponent },
  { path: 'loggertable', component: DataloggerTableComponent },
  { path: 'addmsrmt', component: AddMeasurementComponent },
  { path: 'msrmttable', component: MeasurementTableComponent },
  { path: 'addprouter', component: AddPRouterComponent },
  { path: 'routertable', component: ProuterTableComponent },
  { path: 'addsimcard', component: AddSimcardComponent },
  { path: 'simcardtable', component: SimcardTableComponent },
  { path: 'reporttemplate', component : ReportTemplateComponent },
  { path: '', component: BackgroundComponentComponent },
]

@NgModule({
  imports:      
    [ BrowserModule,
      FormsModule, 
      BrowserAnimationsModule, 
      ReactiveFormsModule,
      MatToolbarModule, 
      MatMenuModule,
      MatButtonModule,
      MatIconModule,
      RouterModule.forRoot(appRoutes),
      MatTableModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatCheckboxModule,
      MatDividerModule,
      MatStepperModule,
      MatCardModule,
      MatMomentDateModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatListModule,
      NgxMatSelectSearchModule,
      MatSnackBarModule,
      SelectAutocompleteModule
    ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent, SubheaderComponent, VehiclesComponent, ProjectsComponent, TestfunctionsComponent, ContractsComponent, DealersComponent,  CustomersComponent, DriversComponent, VehSoftwareComponent, AddNewVehComponent, AddNewProjectComponent, AddTestFunctionComponent, AddNewContractComponent, VehicleTableComponent, ProjectsTableComponent, TestfunctionsTableComponent, ContractsTableComponent, DealersTableComponent, CustomersTableComponent, DriversTableComponent, SoftwareTableComponent, ReportsComponent, AddnewdealerComponent, AddNewCustomerComponent, AddNewEcuComponent, EcuTableComponent, AddNewSoftwareComponent, AddNewValidatorComponent, AddNewErrorComponent, AddNewDriverComponent, AddDataloggerComponent, DataloggerTableComponent, AddCfcardComponent, CfcardsTableComponent, AddCameraComponent, CamerasTableComponent, AddMeasurementComponent, MeasurementTableComponent, AddPRouterComponent, ProuterTableComponent, AddSimcardComponent, SimcardTableComponent, AddNotificationComponent, NotificationTableComponent, AddLogComponent, LogTableComponent, AddRemarkComponent, RemarksTableComponent, AddTrackComponent, TracksTableComponent, AddFracasComponent, FracasTableComponent, AddEwarpComponent, EwarpTableComponent, AddCombinedComponent, CombinedTableComponent, ErrorsTableComponent, BackgroundComponentComponent, ReportTemplateComponent,],
  bootstrap:    [ AppComponent ],
  providers: [ReportService, ProtoService, CoordinatorService, ProjectService, ContractService, ManagerService, OperatorService, CustomerService, ContactsService, TracksService, TestfunctionService, DealerService, DriverService, ReportsService]
})
export class AppModule { }
