import { Directive, ElementRef } from "@angular/core";
import DataSharedService from "../services/data.service";

@Directive({
    selector: "[applyStyle]"
})
export class ApplyStyleDirective {
    constructor(private elementRef: ElementRef, private _sharedService: DataSharedService) {

        this._sharedService.getDataObservable().subscribe((response) => {
            if(response.length > 100) {
                this.elementRef.nativeElement.style.color = "grey";
                this.elementRef.nativeElement.style.border = "1px solid grey";
                this.elementRef.nativeElement.style.margin = "5px";
                this.elementRef.nativeElement.style.padding = "5px";
            } else {
                this.elementRef.nativeElement.style.color = "blue";
                this.elementRef.nativeElement.style.border = "1px solid grey";
                this.elementRef.nativeElement.style.margin = "5px";
                this.elementRef.nativeElement.style.padding = "5px";
            }
        })
        
    }
}