import { Component } from "@angular/core";

@Component({
    selector: "parent-component",
    templateUrl: "parent.component.html"
})
export default class ParentComponent  {
    public userDetails: any = null;

    constructor() {
        this.userDetails = {
            userName: "Mayank",
            userAge: 10
        }
    }

    updateName(eventValue) {
        alert(eventValue);
        this.userDetails.userName = 'Anshul';
    }
 }