import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 

import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MatIconModule
  ],
  imports: [
    CommonModule,
    FormGroup, FormControl, Validators, FormBuilder ,MatIconModule ,
    ReactiveFormsModule,
  ]
})
export class DialogModule { }
