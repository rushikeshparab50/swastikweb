import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ServersComponent } from './servers/servers.component';
import { DomainComponent } from './domain/domain.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CpannelComponent } from './cpannel/cpannel.component';
import { ContactComponent } from './contact/contact.component';
import { HireComponent } from './hire/hire.component';


const routes: Routes = [{
  component:HomeComponent,path:'home'},
{
  component:ServersComponent,path:'servers'},
  
{
  component:DomainComponent,path:'domain'},
  {
    component:HireComponent,path:'hire'},
    {
      component:CpannelComponent,path:'cpannel'},
      {
        component:ContactComponent,path:'contact'},
        {
        path:'', redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
