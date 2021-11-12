import { Component, Input } from "@angular/core";

@Component({
    selector: "child-component",
    templateUrl: "child.component.html"
})
export default class ChildComponent  { 
    @Input() public userName;
    @Input() public userAge;

    ngOnInit() {
        debugger;
        console.dir(this.userName)
        debugger;
    }
} 