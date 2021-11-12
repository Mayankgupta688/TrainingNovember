import { Component } from "@angular/core";

@Component({
    selector: "parent-component",
    templateUrl: "parent.component.html"
})
export default class ParentComponent  {
    public userDetails: any = {
        userName: "Mayank",
        userAge: 10
    }
 }