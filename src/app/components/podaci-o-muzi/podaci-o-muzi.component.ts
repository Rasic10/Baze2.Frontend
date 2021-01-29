import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PodaciOMuzi } from 'src/app/models/podaci-o-muzi';
import { PodaciOMuziService } from 'src/app/services/podaci-o-muzi.service';
import { DialogOk } from 'src/app/share/dialog-ok/ok.dialog';
import { AddPodaciOMuziDialog } from './dialogs/add-podaci-o-muzi.dialog/add-podaci-o-muzi.dialog';
import { UpdatePodaciOMuziDialog } from './dialogs/update-podaci-o-muzi.dialog/update-podaci-o-muzi.dialog';

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
    const dialogRef = this.dialog.open(AddPodaciOMuziDialog, {
      width: '250px',
    }).afterClosed().subscribe(result => {
      console.log(result);

      if (result) {
        this.podaciOMuziService.post(result).subscribe((response) => {
          console.log("response: ");
          console.log(response);
          this.podaciOMuziService.get().subscribe(data => this.dataSource = data);
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
    this.podaciOMuziService.getById(id).subscribe(podaciOMuzi => {
      this.dialog.open(UpdatePodaciOMuziDialog, {
        width: '250px',
        data: podaciOMuzi
      }).afterClosed().subscribe(result => {
        if (result) {
          this.podaciOMuziService.put(result).subscribe((response) => {
            console.log("response: ");
            console.log(response);
            this.podaciOMuziService.get().subscribe(data => this.dataSource = data);
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
