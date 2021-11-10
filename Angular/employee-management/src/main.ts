import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import EmployeeManagementModule from "./employee.module";

import "zone.js";

platformBrowserDynamic().bootstrapModule(EmployeeManagementModule)