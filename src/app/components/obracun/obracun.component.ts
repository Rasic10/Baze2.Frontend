import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObracunService } from 'src/app/services/obracun.service';

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

  }

  update(id: number) {
  }

  delete(id: number) {
  }
}
