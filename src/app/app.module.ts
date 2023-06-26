import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


import { ServersComponent } from './servers/servers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DomainComponent } from './domain/domain.component';
import { CpannelComponent } from './cpannel/cpannel.component';
import { ContactComponent } from './contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { HireComponent } from './hire/hire.component';
















@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    FooterComponent,
    HomeComponent,

    ServersComponent,
    ContactusComponent,
    DomainComponent,
    CpannelComponent,
    ContactComponent,
    HireComponent,
  
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule ,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
