import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component'; 
import { ServersComponent } from '../servers/servers.component'; 
import { ContactusComponent } from '../contactus/contactus.component'; 
import { DomainComponent } from '../domain/domain.component'; 
import { DialogComponent } from '../dialog/dialog.component';
import { AppRoutingModule } from '../app-routing.module'; 
import { AppComponent } from '../app.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { HireComponent } from '../hire/hire.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DialogComponent,
    FooterComponent,
    HomeComponent,
    HireComponent,

    
    ServersComponent,
    ContactusComponent,
    DomainComponent ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatButtonModule,MatDialogModule,
    MatFormFieldModule,
    FormsModule ,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    FooterComponent,
    HomeComponent,
    FormGroup, FormControl, Validators, FormBuilder ,MatIconModule ,
    ReactiveFormsModule,
    ServersComponent,
    ContactusComponent ,
    DomainComponent ,
    HireComponent,
    AppRoutingModule,
    BrowserAnimationsModule,
BrowserModule ,
RouterModule,
  ]
})
export class HireModule { }
