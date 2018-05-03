import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BomUploaderComponent } from './bom-uploader/bom-uploader.component';
import { PriceListComponent } from './price-list/price-list.component';
import { BomRoutingModule } from './bom-routing.module';
import { BomService } from './bom.service';
import { BusyModule } from 'angular2-busy';

@NgModule({
  imports: [
    CommonModule,
    BomRoutingModule,
    FormsModule,
    BusyModule
  ],
  declarations: [DashboardComponent, BomUploaderComponent, PriceListComponent],
  providers: [BomService]
})
export class BomModule { }
