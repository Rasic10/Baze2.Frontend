import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Krava } from 'src/app/models/krava';
import { KravaService } from 'src/app/services/krava.service';
import { DialogOk } from 'src/app/share/dialog-ok/ok.dialog';
import { AddKravaDialog } from './dialogs/add-krava.dialog/add-krava.dialog';
import { UpdateKravaDialog } from './dialogs/update-krava.dialog/update-krava.dialog';

@Component({
  selector: 'app-krava',
  templateUrl: './krava.component.html',
  styleUrls: ['./krava.component.scss']
})
export class KravaComponent implements OnInit {

  displayedColumns: string[] = ['IdZivotinje', 'Ime', 'datumRodjenja', 'idZivotinjeMajke', 'pol', 'rasa', 'trenutnaKolicinaMleka', 'Actoins'];
  displayedColumns2: string[] = ['IdZivotinje', 'Ime', 'datumRodjenja', 'idZivotinjeMajke', 'pol', 'rasa', 'trenutnaKolicinaMleka'];
  public dataSource: Krava[];
  public dataSourceKrava: Krava[] = [];
  public dataSourceBik: Krava[] = [];


  constructor(private http: HttpClient,
    private kravaService: KravaService,
    public dialog: MatDialog,) {
      this.kravaService.get().subscribe(data => this.dataSource = data);
      this.kravaService.getKrava().subscribe(data => this.dataSourceKrava = data);
      this.kravaService.getBik().subscribe(data => this.dataSourceBik = data);
     }

  ngOnInit(): void {
  }

  add() {
    const dialogRef = this.dialog.open(AddKravaDialog, {
      width: '250px',
    }).afterClosed().subscribe(result => {
      console.log("nesto" + result);
      if (result) {
        this.kravaService.post(result).subscribe((response) => {
          console.log("response: ");
          console.log(response);
          this.kravaService.get().subscribe(data => this.dataSource = data);
          this.kravaService.getKrava().subscribe(data => this.dataSourceKrava = data);
          this.kravaService.getBik().subscribe(data => this.dataSourceBik = data);
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
    this.kravaService.getById(id).subscribe(krava => {
      this.dialog.open(UpdateKravaDialog, {
        width: '250px',
        data: krava
      }).afterClosed().subscribe(result => {
        console.log(result);
        if (result) {
          this.kravaService.put(result).subscribe((response) => {
            console.log("response: ");
            console.log(response);
            this.kravaService.get().subscribe(data => this.dataSource = data);
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
