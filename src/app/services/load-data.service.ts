import { AddNew } from './../shared/interface/addNew';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

const patientData : AddNew [] = [ //initialized default value for table
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rosi',
    doctor: {
      id: 1,
      firstName: "Jonh",
      lastName: "Hewit",
      title: "MD"
    },
    regDate:  moment().subtract(1, 'months').format("DD.MM.YYYY."),
    email: 'john@email.com',
    phone: '+9635365362',
    street: 'Via Tiburtina 59',
    city: 'Rome',
    zipcode: '00131',
    country: 'Italy',
    anotherAddress: [
        {
            type: "Work",
            name: 'Office',
            phone: '+960185744',
            street: 'Main Streat 40',
            city: 'Rome',
            zipcode: '00131',
            country: 'Italy'
        },
        {
          type: "Work",
          name: 'Office',
          phone: '+960185744',
          street: 'Main Streat 40',
          city: 'Rome',
          zipcode: '00131',
          country: 'Italy'
      }
    ]
  },
  {
    id: 2,
    firstName: 'Francesco',
    lastName: 'Giuliani',
    doctor: {
      id: 2,
      firstName: "Gregory",
      lastName: "House",
      title: "Immunologist"
    },
    regDate:  moment().subtract(3, 'months').format("DD.MM.YYYY."),
    email: 'francesco@email.com',
    phone: '+964141889',
    street: "Via Casilina 72",
    city: 'Rome',
    zipcode: '00131',
    country: 'Italy',
    anotherAddress:[
        {
            type: "Work",
            name: 'Office',
            phone: '+960185744',
            street: 'Main Streat 40',
            city: 'Rome',
            zipcode: '00131',
            country: 'Italy'
        }
      ]
  },
  {
    id: 3,
    firstName: 'Elico',
    lastName: "Maikenberg",
    doctor: {
      id: 3,
      firstName: "Joseph",
      lastName: "Lister",
      title: "Surgeon"
    },
    regDate:  moment().subtract(5, 'months').format("DD.MM.YYYY."),
    email: 'elico@email.com',
    phone: '+968*99966333',
    street: 'Via Cassia 99',
    city: 'Rome',
    zipcode: '00131',
    country: 'Italy',
    anotherAddress: [
        {
            type: "Work",
            name: 'Office',
            phone: '+960185744',
            street: 'Main Streat 40',
            city: 'Rome',
            zipcode: '00131',
            country: 'Italy'
        }
      ]
  },
  {
    id: 4,
    firstName: 'Govani',
    lastName: 'De Rossi',
    doctor: {
      id: 4,
      firstName: "Jonh",
      lastName: "Hewit",
      title: "MD"
    },
    regDate:  moment().subtract(6, 'months').format("DD.MM.YYYY."),
    email: 'rossi@email.com',
    phone: '+9635365362',
    street: 'Via Rossi 59',
    city: 'Rome',
    zipcode: '00131',
    country: 'Italy',
    anotherAddress: [
        {
            type: "Work",
            name: 'Office',
            phone: '+960185744',
            street: 'Main Streat 40',
            city: 'Rome',
            zipcode: '00132',
            country: 'Italy'
        }
      ]
  },
  {
    id: 5,
    firstName: 'Fran',
    lastName: 'Vito',
    doctor: {
      id: 5,
      firstName: "Jonh",
      lastName: "Hewit",
      title: "MD"
    },
    regDate:  moment().subtract(7, 'months').format("DD.MM.YYYY."),
    email: 'fran@email.com',
    phone: '+964789798',
    street: 'Via Casa 59',
    city: 'Rome',
    zipcode: '00131',
    country: 'Italy',
    anotherAddress: [
        {
            type: "Work",
            name: 'Office',
            phone: '+960185744',
            street: 'Main Streat 40',
            city: 'Rome',
            zipcode: '00131',
            country: 'Italy'
        }
      ]
  }
]

@Injectable({
  providedIn: 'root'
})

export class LoadDataService {

  constructor(){
  }

  private _patientSource:  BehaviorSubject<AddNew[]> = new BehaviorSubject(patientData);
  patientData = this._patientSource.asObservable();
  
  addPatient(newPatient: AddNew){
    let id =  Math.floor((Math.random()*100)+1);
    let regDate = moment().format('DD.MM.YYYY.');
    const addNewParams: AddNew = {...newPatient,id: id, regDate: regDate}
    patientData.push(addNewParams)
    this._patientSource.next(patientData); 
  }
}
