import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  title = 'finance';
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      width:'950px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  loginForm= new FormGroup({
   user:new FormControl('',[Validators.required,Validators.email]) ,
   password:new FormControl('',[Validators.required,Validators.minLength(5)]),
  })
loginUser()
  {
    console.warn(this.loginForm.value)
  }
   get user()
   {
    return this.loginForm.get('user')
   }

get password()
{
  return this.loginForm.get('password');
}


}


 
