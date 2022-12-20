import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllcontactComponent } from './allcontact/allcontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { DeletecontactComponent } from './deletecontact/deletecontact.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllcontactComponent,
    EditcontactComponent,
    DeletecontactComponent,
    AddcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
