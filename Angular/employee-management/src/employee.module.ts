import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import ApplicationCmponent from "./components/ApplicationComponent/application.component";
import EmployeeListComponent from "./components/EmployeeListcomponent/employee-list.component";
import {ConvertToSpacePipe, ConvertTimeToRequiredValuePipe } from "./pipes/convert-space.pipe";
import { EmployeeCountComponent } from './components/employee-count/employee-count.component';

import { HttpClientModule } from "@angular/common/http";
import StockDataComponent from "./components/stock-data/stock-data.component";
import ComponentOne from "./components/InterCoponentCommunication/component-one/component-one.component";
import ComponentTwo from "./components/InterCoponentCommunication/component-two/component-two.component";
import ParentComponent from "./components/ParenChildRelationship/parentComponent/parent.component";
import ChildComponent from "./components/ParenChildRelationship/childComponent/child.component";

@NgModule({
    declarations: [ 
        ApplicationCmponent, 
        EmployeeListComponent, 
        ConvertToSpacePipe, 
        ConvertTimeToRequiredValuePipe, 
        EmployeeCountComponent, 
        StockDataComponent,
        ComponentOne,
        ComponentTwo,
        ParentComponent,
        ChildComponent
    ],
    imports: [ BrowserModule, FormsModule, HttpClientModule ],
    bootstrap: [ ParentComponent ]
})
export default class EmployeeManagementModule { }