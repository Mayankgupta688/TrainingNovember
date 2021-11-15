import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import DataService from 'src/DataService/data.service';
import { EmpoyeeDetailsComponent } from './empoyee-details/empoyee-details.component';
import { EmpoyeeListComponent } from './empoyee-list/empoyee-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: "", component: HomeComponent },
    { 
      path: "employeelist", 
      component: EmpoyeeListComponent,
      resolve: {
        employeeObservable: DataService 
      }
    },
    { path: "details/:id/:name", component: EmpoyeeDetailsComponent }
  ])],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
