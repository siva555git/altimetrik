import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentFormComponent } from './investment-form/investment-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: "investment-form",
  component: InvestmentFormComponent,
},{
  path: "dashboard",
  component: DashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
