import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './shared/material';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import * as moment from 'moment';
import { momentAdapterFactory } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AuthModule,
    MaterialModules,
<<<<<<< HEAD
    FormsModule
=======
>>>>>>> aa877d74105e0d935c84244aa7d152a7da52aa1c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
