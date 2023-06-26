import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormControl,Validators} from '@angular/forms';
import {FormBuilder } from '@angular/forms';
import {FormControlName } from '@angular/forms';
import { FormGroup} from '@angular/forms'; 


@Component({
  selector: 'app-dialog',
 
  
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  emailFromControl = new FormControl('', [Validators.required, Validators.email]);

 NameFromControl = new FormControl('', [Validators.required, Validators.email]);


 LastNameFromControl = new FormControl('', [Validators.required, Validators.email]);
AddressFromControl = new FormControl('', [Validators.required, Validators.email]);
CityFromControl = new FormControl('', [Validators.required, Validators.email]);
StateFromControl = new FormControl('', [Validators.required, Validators.email]);
postalFromControl = new FormControl('', [Validators.required, Validators.email]);
skypeFromControl = new FormControl('', [Validators.required, Validators.email]);
phoneFromControl = new FormControl('', [Validators.required, Validators.email]);




  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 
}



