import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'Reactive', component:ReactiveComponent},
  {path:'addEmployee', component:AddEmployeeComponent},
  {path:'update/:Id', component:UpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
