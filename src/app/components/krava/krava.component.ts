import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Krava } from 'src/app/models/krava';
import { KravaService } from 'src/app/services/krava.service';
import { DialogOk } from 'src/app/share/dialog-ok/ok.dialog';
import { UpdateKravaDialog } from './dialogs/update-krava.dialog/update-krava.dialog';

@Component({
  selector: 'app-krava',
  templateUrl: './krava.component.html',
  styleUrls: ['./krava.component.scss']
})
export class KravaComponent implements OnInit {

  displayedColumns: string[] = ['IdZivotinje', 'Ime', 'datumRodjenja', 'idZivotinjeMajke', 'pol', 'rasa', 'trenutnaKolicinaMleka', 'Actoins'];
  public dataSource: Krava[];

  constructor(private http: HttpClient,
    private kravaService: KravaService,
    public dialog: MatDialog,) {
      this.kravaService.get().subscribe(data => this.dataSource = data);
     }

  ngOnInit(): void {
  }

  add() {

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
