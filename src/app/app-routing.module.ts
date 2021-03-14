import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { HomeComponent } from './components/home/home.component';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';


const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: 'add-new', 
    component: AddPatientComponent
  },
  { 
    path: 'list', 
    component: ListPatientsComponent
  },
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  {
    path: '**', 
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
