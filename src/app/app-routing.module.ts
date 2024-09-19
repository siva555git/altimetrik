import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentFormComponent } from './investment-form/investment-form.component';

const routes: Routes = [{
  path: "investment-form",
  component: InvestmentFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
