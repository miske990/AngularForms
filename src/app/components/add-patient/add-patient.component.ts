import { AddNew } from './../../shared/interface/addNew';
import { LoadDataService } from './../../services/load-data.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ChangeDetectionStrategy } from "@angular/core";
import { keyframes } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  addForm: FormGroup;
  doctors_list: any = [];
  firstName: string = "";
  lastName: string = "";
  birthdate: string = "";
  vat: string = "";
  email: string = "";
  doctor: string = "";
  phone: string = "";
  street: string = "";
  city: string = "";
  zipcode: string = "";
  country: string = "";
  name: string = "";
  type: string = "";
  arrayInputs = [];
  adult: boolean = false;
  show: boolean = false;
  required: boolean = false;

  myObjArray: any  = [];
  patient: AddNew[];
  newData:string;

  phoneValue: string = '+39';

  minDate = moment().subtract(100, 'years').format("YYYY-MM-DD");
  maxDate = moment().subtract(18, 'years').format("YYYY-MM-DD");
  currentDate = new Date();

  types = [
    {
      id: 1,
      name: "Second Home"
    },
    {
      id: 2,
      name: "Work"
    },
    {
      id: 3,
      name: "Holiday place"
    },
    {
      id: 3,
      name: "Close relative"
    },
  ]

  constructor(private apiService: ApiService, 
              private router: Router,
              private loadDataService: LoadDataService,
              private fb: FormBuilder) {

                this.addForm = this.fb.group({
                  firstName: ['', Validators.required],
                  lastName: ['', Validators.required],
                  birthdate: ['',Validators.required],
                  vat: [''],
                  email: ['',  Validators.compose([Validators.required,  Validators.email])],
                  doctor: ['', Validators.required],
                  phone: new FormControl('', {
                    validators: [Validators.required],
                    updateOn: "blur"
                  }),
                  street: ['',Validators.required],
                  city: ['',Validators.required],
                  zipcode: ['', Validators.required],
                  country: ['', Validators.required],
                  anotherAddress: this.fb.array([this.createItem()])
                }) 

  }


 
  ngOnInit(): void {
    this.loadDataService.patientData.subscribe(patient => this.patient = patient);
    this.apiService.getDoctorsList().subscribe(
      (res: any) => {
        this.doctors_list = res;
      },
      (err: any) => { 
        throw err;
      }
    )
    
    this.setArrayInputs(this.arrayInputs); //set empty anotherAddress fields as default
  }



  getEndDate(type: string, event: MatDatepickerInputEvent<Date>){
    this.adult = false;
    let a = moment(this.currentDate);
    let b = moment(event.value);
    a.diff(b, 'years',true); 
    if(a.diff(b, 'years',true) >= 18){
      this.adult = true;
    }
  }

  setArrayInputs(arrayInputs) {
    const arrayFG = arrayInputs.map(items => this.fb.group(items));
    const formArray = this.fb.array(arrayFG);
    this.addForm.setControl('anotherAddress', formArray);
  }

  createItem(): FormGroup {
    return this.fb.group({
      type: [''],
      name: [''],
      phone: [''],
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required]
    });
  }
  

  getControls() {
    return (this.addForm.get('anotherAddress') as FormArray).controls;
  }

  focusFunction(event: any) {
    this.addForm.get('phone').setValue(this.phoneValue);
  }

  focusFunction2(value: any) {
    value.setValue(this.phoneValue)
  }

  addInput() {
    this.required = true;
    (this.addForm.get('anotherAddress') as FormArray).push(this.fb.group(
      {
        type:'', name:'',       
        phone: new FormControl('',[Validators.required]), 
        street: new FormControl('',[Validators.required]), 
        city: new FormControl('',[Validators.required]), 
        zipcode: new FormControl('',[Validators.required]), 
        country: new FormControl('',[Validators.required]), 
      })
    ) 
  }

  removeInput(index) { 
    this.required = false;
    this.addForm.controls.anotherAddress["controls"].splice(index,1) 
  }
  

  onChange(value: any) {
    this.show = false;
    if(value === "Work" || value === "Close relative"){
      this.show = true;
    }
  }

  save() {
    let data = this.addForm.value;
    this.loadDataService.addPatient(data);
    this.router.navigateByUrl('home');
  }

}
