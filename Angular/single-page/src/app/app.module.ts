import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpoyeeListComponent } from './empoyee-list/empoyee-list.component';
import { HomeComponent } from './home/home.component';
import { EmpoyeeDetailsComponent } from './empoyee-details/empoyee-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from "@angular/common/http"
import DataService from 'src/DataService/data.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpoyeeListComponent,
    HomeComponent,
    EmpoyeeDetailsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
