import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ZaposlenService } from 'src/app/services/zaposleni.service';

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

  }

  update(id: number) {

  }

  delete(id: number) {

  }

}
