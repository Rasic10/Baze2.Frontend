import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PodaciOMuzi } from 'src/app/models/podaci-o-muzi';
import { PodaciOMuziService } from 'src/app/services/podaci-o-muzi.service';

@Component({
  selector: 'app-podaci-o-muzi',
  templateUrl: './podaci-o-muzi.component.html',
  styleUrls: ['./podaci-o-muzi.component.scss']
})
export class PodaciOMuziComponent implements OnInit {

  displayedColumns: string[] = ['rbPodatakOMuzi', 'idZivotinje', 'kolicinaMleka', 'vremeMuze', 'Actions'];
  public dataSource = [];

  constructor(private http: HttpClient,
    private podaciOMuziService: PodaciOMuziService,
    public dialog: MatDialog,) {
    this.podaciOMuziService.get().subscribe(data => this.dataSource = data);
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
