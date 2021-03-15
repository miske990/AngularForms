import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { ListPatientsComponent, DialogDataExampleDialog } from './components/list-patients/list-patients.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPatientComponent,
    ListPatientsComponent,
    DialogDataExampleDialog,
    FormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [ListPatientsComponent, DialogDataExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
