import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { AllcontactComponent } from './allcontact/allcontact.component';
import { DeletecontactComponent } from './deletecontact/deletecontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';

const routes: Routes = [
  {path:'contacts',component:AllcontactComponent},
  {path:'',pathMatch:'full',redirectTo:'contacts'},
  {path:'addcontact',component:AddcontactComponent},
  {path:'editcontact/:id',component:EditcontactComponent},
  {path:'deletecontact:id',component:DeletecontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
