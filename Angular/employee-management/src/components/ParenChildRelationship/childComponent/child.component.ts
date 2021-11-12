import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "child-component",
    templateUrl: "child.component.html"
})
export default class ChildComponent  { 
    @Input() public userName;
    @Input() public userAge;

    @Output() changeEvent: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        console.dir(this.userName);
    }

    updateNameEvent() {
        this.changeEvent.emit("Update Name")
    }
} 