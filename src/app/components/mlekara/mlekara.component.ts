import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MlekaraService } from 'src/app/services/mlekara.service';
import { DialogOk } from 'src/app/share/dialog-ok/ok.dialog';
import { DialogYesNo } from 'src/app/share/dialog-yes-no/yes-no.dialog';
import { DialogOverviewExampleDialog } from './dialogs/add-mlekara.dialog/addMlekara.dialog';
import { UpdateMlekaraDialog } from './dialogs/update-mlekara.dialog/updateMlekara.dialog';

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
    }).afterClosed().subscribe(result => {
      if (result) {
        this.mlekaraService.post(result).subscribe((response) => {
          console.log("response: ");
          console.log(response);
          this.mlekaraService.get().subscribe(data => this.dataSource = data);
        }, (result) => {
          this.dialog.open(DialogOk, {
            width: '450px',
            data: {errorText: result.error.text}
          });
          console.log("errorText: " + result.error.text);
          console.log(result);
        })
      }
    });
  }

  update(id: number) {
    this.mlekaraService.getById(id).subscribe(mlekara => {
      this.dialog.open(UpdateMlekaraDialog, {
        width: '250px',
        data: mlekara
      })
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
