import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Krava } from 'src/app/models/krava';
import { KravaService } from 'src/app/services/krava.service';

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
      this.kravaService.get().subscribe(data => {this.dataSource = data; 
      console.log(this.dataSource)});
     }

  ngOnInit(): void {
  }

  add() {

  }

  update(id: number) {

  }

  delete(id: number) {

  }
}
