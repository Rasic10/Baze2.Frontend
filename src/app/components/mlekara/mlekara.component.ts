import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MlekaraService } from 'src/app/services/mlekara.service';
import { DialogYesNo } from 'src/app/share/dialog-yes-no/yes-no.dialog';
import { DialogOverviewExampleDialog } from './addMlekara.dialog';

@Component({
  selector: 'app-mlekara',
  templateUrl: './mlekara.component.html',
  styleUrls: ['./mlekara.component.scss']
})
export class MlekaraComponent implements OnInit {

  displayedColumns: string[] = ['SifraMlekare', 'Pib', 'NazivMlekare', 'MaticniBroj', 'PttMesta', 'Actoins'];
  public dataSource = [];

  animal: string;
  name: string;

  constructor(private http: HttpClient, 
              private mlekaraService: MlekaraService,
              public dialog: MatDialog,) { 
                this.mlekaraService.get().subscribe(data => this.dataSource = data);
              }

  ngOnInit(): void {
    
  }

  add() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  delete(id: number) {
    const dialogRef = this.dialog.open(DialogYesNo, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.mlekaraService.delete(id).subscribe(() => {
          this.mlekaraService.get().subscribe(data => this.dataSource = data);
        });
      }
    });
  }
}
