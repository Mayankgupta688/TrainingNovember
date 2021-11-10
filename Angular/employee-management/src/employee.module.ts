import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import ApplicationCmponent from "./components/ApplicationComponent/application.component";
import EmployeeListComponent from "./components/EmployeeListcomponent/employee-list.component";

@NgModule({
    declarations: [ ApplicationCmponent, EmployeeListComponent ],
    imports: [ BrowserModule ],
    bootstrap: [ EmployeeListComponent ],

})
export default class EmployeeManagementModule { }