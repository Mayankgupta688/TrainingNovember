import { NgModule } from "@angular/core";
import { ApplyStyleDirective } from "./shared/directives/apply-style.directive";
import DelayRenderingDirective from "./shared/directives/delay-rendering.directive";
import GetTimeComponent from "./shared/getTimeComponent/get-time.component";

@NgModule({
    declarations: [GetTimeComponent, DelayRenderingDirective, ApplyStyleDirective],
    imports: [],
    exports: [ GetTimeComponent, DelayRenderingDirective, ApplyStyleDirective ]
})
export default class SharedModule {

}