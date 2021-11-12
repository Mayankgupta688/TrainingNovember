import { Component } from "@angular/core";
import DataService from "src/services/data.other.service";

@Component({
    selector: "employee-list",
    templateUrl: "employee-list.component.html",
    styleUrls: ["employee.list.component.css", "employee.list.other.component.css"]
})
export default class EmployeeListComponent {
    userName: string = "Mayank";
    counter: number = 0;
    headerColor: string = "blue";
    headerId: string = "dummy-header";
    headerClass: string = "dummy-header-class";
    applyClass: boolean = false;
    dateTime: any = new Date();

    filterText = "TechnoFunnel";

    captureInput(event: any) {
        this.filterText = event.target.value;
    }

    captureInputModel(value : any) {
        this.filterText = value;
    }

    employeeList: any = [];

    deleteEmployee(name: string, id: string) {
        alert(`Employee with name ${name} need to be deleted...`);
        alert(`Employee Id is ${id}`);

        this.employeeList = this.employeeList.filter((employee) => {
            return employee.id != id;
        })
    }

    constructor(private _data: DataService) {
        setInterval(() => {
            this.counter = this.counter + 1;
        }, 1000)

        setTimeout(() => {
            this.headerId = "dummy-header-mayank";
            this.headerClass = "dummy-header-class-maynk";
            this.applyClass = true;
        }, 5000);
    }
}