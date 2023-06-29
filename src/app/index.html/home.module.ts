import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from './home.component'; 
import { HireComponent } from '../hire/hire.component';
import { ServersComponent } from '../servers/servers.component'; 
import { ContactusComponent } from '../contactus/contactus.component'; 
import { DomainComponent } from '../domain/domain.component'; 
import { DialogComponent } from '../dialog/dialog.component'; 
import { AppRoutingModule } from '../app-routing.module'; 
import { AppComponent } from '../app.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ContactModule } from '../contact/contact.module';
import { ContactComponent } from '../contact/contact.component';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [DialogComponent,
    AppComponent,
    DialogComponent,
    FooterComponent,
    HomeComponent,
    HireComponent,
    ContactComponent,
    MatIconModule,
    ServersComponent,
    ContactusComponent,
    DomainComponent ,
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    HireComponent,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule ,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    ContactModule,
    HomeComponent,
    ServersComponent,
    ContactusComponent ,
    DomainComponent ,
    AppRoutingModule,
    BrowserAnimationsModule,
BrowserModule ,
RouterModule,

  ]
})
export class HomeModule { }
