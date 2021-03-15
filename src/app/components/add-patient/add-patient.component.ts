import { LoadDataService } from './../../services/load-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  basic: FormGroup;

  constructor(private loadDataService: LoadDataService,
              private fb: FormBuilder) {

    this.basic = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdate: ['',Validators.required],
      vat: [''],
      email: ['', Validators.compose([Validators.required,  Validators.email])],
      doctor: ['', Validators.required],
      phone: ['', Validators.required],
      street: ['',Validators.required],
      city: ['',Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required],
      anotherAddress: this.fb.array([this.createItem()])
    }) 

  }

  ngOnInit(): void {
  }

  createItem(): FormGroup {
    return this.fb.group({
      type: [''],
      name: [''],
      phone: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required]
    });
  }
  
}
