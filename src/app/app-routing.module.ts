import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AppComponent } from './app.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {path:'',component:ListUserComponent},
  {path:'list-user',component:ListUserComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'edit-user',component:EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
