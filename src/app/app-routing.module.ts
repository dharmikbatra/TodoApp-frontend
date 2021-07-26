import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginguardGuard } from './loginguard.guard';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'',component:SigninComponent},
  {path:'todo',canActivate:[LoginguardGuard],component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
