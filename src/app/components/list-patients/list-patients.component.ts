import { LoadDataService } from './../../services/load-data.service';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AddNew } from 'src/app/shared/interface/addNew';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit, AfterViewInit {

  patient: AddNew[];
  newData: string;
  new: any  = [];
  result: any;

  constructor(private loadDataService: LoadDataService, public dialog: MatDialog) { 
    this.loadDataService.patientData.subscribe(patient => this.patient = patient);
    this.dataSource = new MatTableDataSource(this.patient);
  }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.dataSource.sort = this.sort;
  }

  openDialog(elm: any) {
    this.result = this.dataSource.data.find( ({ id }) => id == elm );
    this.dialog.open(DialogDataExampleDialog, {
      width: '30%',
      height: '84%',
      data: {
        id: this.result.id,
        regDate: this.result.regDate,
        firstName: this.result.firstName + ' ' + this.result.lastName,
        doctor: this.result.doctor.firstName + ' ' + this.result.doctor.lastName,
        email: this.result.email,
        phone: this.result.phone,
        city: this.result.city,
        street: this.result.street,
        zipcode: this.result.zipcode,
        country: this.result.country,
        anotherAddress: this.result.anotherAddress
      }
    });
  }

  displayedColumns = ['name', 'regDate', 'doctor', 'phone', 'street', 'city', 'zip', 'country','columndelete', 'info'];
  dataSource: MatTableDataSource<AddNew>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  delete(elm: any) {
    this.dataSource.data = this.dataSource.data
    .filter(i => i !== elm)
    .map((i, id) => (i.id = (id + 1), i));
  }

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styleUrls: ['./dialog-data-example-dialog.css']
})
export class DialogDataExampleDialog {
  public dialogRef: MatDialogRef<DialogDataExampleDialog>
  constructor(@Inject(MAT_DIALOG_DATA) public data: AddNew) {}
}

