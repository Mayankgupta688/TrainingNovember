import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@NgModule({
    declarations: [],
    imports: [ BrowserModule ],
    bootstrap: []
})
class EmployeeManagementModule {

}

platformBrowserDynamic().bootstrapModule(EmployeeManagementModule)