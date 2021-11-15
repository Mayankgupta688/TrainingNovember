import { Component } from "@angular/core";

@Component({
    selector: "get-time",
    templateUrl: "get-time.component.html"
})
export default class GetTimeComponent {

    getCurrentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()}:  ${new Date().getSeconds()}`
    }
    currentTime: string = this.getCurrentTime();
    constructor() {
        setInterval(() => {
            this.currentTime = this.getCurrentTime();
        }, 1000)
    }
}