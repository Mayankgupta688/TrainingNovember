import { Component, Input, SimpleChange } from "@angular/core";

@Component({
    selector: "life-cycle", 
    template: `<div>
            <h1>This is Life Cycle Event List Content</h1> <br/>
            <life-cycle-child [userName]="userName"><b>This is Content Projection 1 {{userName}}</b></life-cycle-child>
        </div>
    `
})
export class LifeCycleEvents {
    userName: string = "Mayank";
   constructor() {
       alert("The Contructor is Invoked...")

       setTimeout(() => {
        this.userName = "Anshul";
       }, 5000)
   } 

   ngOnInit() {
       alert("The Component is Initialized...")
   }

   ngOnChanges(changes: SimpleChange) {
        debugger;
    }

    ngAfterContentChecked() {

    }

    ngAfterViewChecked() {
        
    }

    ngAfterContentInit() {

    }

    ngAfterViewInit() {

    }

   ngOnDestroy() {
       alert("Destroyed called for Component")
   }
}

@Component({
    selector: "life-cycle-child", 
    template: `<div>
            <h1>This is Life Cycle Event List for Child</h1> 
            <ng-content></ng-content>
        </div>
    `
})
export class LifeCycleEventsChild {
    @Input() userName;
   constructor() {
       alert("The Contructor is Invoked for Child...");
   } 

   ngOnChanges(changes: SimpleChange) {
    debugger;
   }

   ngOnInit() {
       alert(this.userName)
   }
}