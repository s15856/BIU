import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CalcComponent } from './calc/calc.component';
import { UserformComponent } from './user/userform/userform.component';

const routes: Routes = [
  {path: '', redirectTo: '/user/userform', pathMatch: 'full'},
  {path: 'user', component: UserComponent,
  children: [
  {path: 'userform', component: UserformComponent }
]},
{path: 'calc', component: CalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
