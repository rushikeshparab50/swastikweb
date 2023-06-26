import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-cpannel',
  templateUrl: './cpannel.component.html',
  styleUrls: ['./cpannel.component.css']
})
export class CpannelComponent {
  
    longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;
    title = 'home';
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      const dialogRef = this.dialog.open(DialogComponent,{
        width:'350px',
      });
  
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
  
  


