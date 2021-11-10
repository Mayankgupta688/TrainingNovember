import { Component } from "@angular/core";

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

    constructor() {
        setInterval(() => {
            this.counter = this.counter + 1;
        }, 1000)

        setTimeout(() => {
            this.headerId = "dummy-header-mayank";
            this.headerClass = "dummy-header-class-maynk";
            this.applyClass = true;
        }, 5000)
    }
}