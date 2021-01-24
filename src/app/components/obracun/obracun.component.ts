import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObracunService } from 'src/app/services/obracun.service';
import { DialogOk } from 'src/app/share/dialog-ok/ok.dialog';
import { AddObracunDialog } from './dialogs/add-obracun.dialog/add-obracun.dialog';
import { UpdateObracunDialog } from './dialogs/update-obracun.dialog/update-obracun.dialog';

@Component({
  selector: 'app-obracun',
  templateUrl: './obracun.component.html',
  styleUrls: ['./obracun.component.scss']
})
export class ObracunComponent implements OnInit {

  displayedColumns: string[] = ['SifraObracuna', 'DatumObracuna', 'PeriodOd', 'PeriodDo', 'Litara', 'SifraMlekare', 'NazivMlekare', 'Actoins'];
  public dataSource = [];

  constructor(private http: HttpClient, 
              private obracunService: ObracunService,
              public dialog: MatDialog,) {
                this.obracunService.get().subscribe(data => this.dataSource = data);
               }

  ngOnInit(): void {
  }

  add() {
    const dialogRef = this.dialog.open(AddObracunDialog, {
      width: '250px',
    }).afterClosed().subscribe(result => {
      if (result) {
        this.obracunService.post(result).subscribe((response) => {
          console.log("response: ");
          console.log(response);
          this.obracunService.get().subscribe(data => this.dataSource = data);
        }, (result) => {
          this.dialog.open(DialogOk, {
            width: '450px',
            data: { errorText: result.error.text }
          });
          console.log("errorText: " + result.error.text);
          console.log(result);
        })
      }
    });
  }

  update(id: number) {
    this.obracunService.getById(id).subscribe(obracun => {
      console.log("Asd " + obracun);
      this.dialog.open(UpdateObracunDialog, {
        width: '250px',
        data: obracun
      }).afterClosed().subscribe(result => {
        if (result) {
          this.obracunService.put(result).subscribe((response) => {
            console.log("response: ");
            console.log(response);
            this.obracunService.get().subscribe(data => this.dataSource = data);
          }, (result) => {
            this.dialog.open(DialogOk, {
              width: '450px',
              data: { errorText: result.error.text }
            });
            console.log("errorText: " + result.error.text);
            console.log(result);
          })
        }
      });
    });
  }

  delete(id: number) {
  }
}
