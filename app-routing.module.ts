import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', loadChildren: 'app/users/users.module#UsersModule' },
  { path: 'bom', loadChildren: 'app/bom/bom.module#BomModule' },
  { path: 'reports', loadChildren: 'app/reports/reports.module#ReportsModule' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
