import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ExceptionService } from '../app/core/exception.service';
import { CoreModule } from '../app/core/core.module';
import { AlertComponent } from './directives/alert/alert.component';
import { ModalDialogComponent } from './directives/modal-dialog/modal-dialog.component';
import { AlertService } from './shared/service/alert.service';

@NgModule({
  declarations: [AppComponent, AlertComponent, ModalDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpModule,
    CoreModule
  ],
  providers: [
    ExceptionService, AlertService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalDialogComponent]
})
export class AppModule { }
