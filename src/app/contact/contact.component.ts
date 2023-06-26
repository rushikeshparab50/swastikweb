import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailFromControl = new FormControl('', [Validators.required, Validators.email]);

 NameFromControl = new FormControl('', [Validators.required, Validators.email]);
 LastNameFromControl = new FormControl('', [Validators.required, Validators.email]);
AddressFromControl = new FormControl('', [Validators.required, Validators.email]);
CityFromControl = new FormControl('', [Validators.required, Validators.email]);
StateFromControl = new FormControl('', [Validators.required, Validators.email]);
postalFromControl = new FormControl('', [Validators.required, Validators.email]);
skypeFromControl = new FormControl('', [Validators.required, Validators.email]);
phoneFromControl = new FormControl('', [Validators.required, Validators.email]);
budgetFromControl = new FormControl('', [Validators.required, Validators.email]);



  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  title = 'home';
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      width:'350px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
