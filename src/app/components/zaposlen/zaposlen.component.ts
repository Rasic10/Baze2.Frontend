import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ZaposlenService } from 'src/app/services/zaposleni.service';
import { DialogOk } from 'src/app/share/dialog-ok/ok.dialog';
import { AddZaposlenDialog } from './dialogs/add-zaposleni.dialog/add-zaposlen';

@Component({
  selector: 'app-zaposlen',
  templateUrl: './zaposlen.component.html',
  styleUrls: ['./zaposlen.component.scss']
})
export class ZaposlenComponent implements OnInit {

  displayedColumnsOsnovno: string[] = ['sifraZaposlenog', 'ime', 'prezime'];
  displayedColumnsDetaljno: string[] = ['sifraZaposlenog', 'jmbg', 'brLicneKarte'];
  public dataSourceOsnovno = [];
  public dataSourceDetaljno = [];

  constructor(private http: HttpClient,
    private zaposlenService: ZaposlenService,
    public dialog: MatDialog,) {
    this.zaposlenService.getOsnovno().subscribe(data => this.dataSourceOsnovno = data);
    this.zaposlenService.getDetaljno().subscribe(data => this.dataSourceDetaljno = data);
  }

  ngOnInit(): void {
  }

  add() {
    const dialogRef = this.dialog.open(AddZaposlenDialog, {
      width: '250px',
    }).afterClosed().subscribe(result => {
      if (result) {
        this.zaposlenService.post(result).subscribe((response) => {
          console.log("response: ");
          console.log(response);
          this.zaposlenService.getOsnovno().subscribe(data => this.dataSourceOsnovno = data);
          this.zaposlenService.getDetaljno().subscribe(data => this.dataSourceDetaljno = data);
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

  }

  delete(id: number) {

  }

}
