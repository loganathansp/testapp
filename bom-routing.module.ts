import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BomUploaderComponent } from './bom-uploader/bom-uploader.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PriceListComponent } from './price-list/price-list.component';
import { Router } from '@angular/router/src/router';

const bomRoutes: Routes = [
  {
    path: '',
    component: BomUploaderComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(bomRoutes)],
  exports: [RouterModule]
})
export class BomRoutingModule { }
