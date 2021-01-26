import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KvalitetMleka } from 'src/app/models/kvalitet-mleka';
import { KvalitetMlekaService } from 'src/app/services/kvalitet-mleka.service';
import { DialogOk } from 'src/app/share/dialog-ok/ok.dialog';
import { UpdateKvalitetMlekaDialog } from './dialogs/update-kvalitet-mleka.dialog/update-kvalitet-mleka.dialog';

@Component({
  selector: 'app-kvalitet-mleka',
  templateUrl: './kvalitet-mleka.component.html',
  styleUrls: ['./kvalitet-mleka.component.scss']
})
export class KvalitetMlekaComponent implements OnInit {

  displayedColumns: string[] = ['datumKvaliteta', 'rbParametra', 'rbPodatakaOMuzi', 'idZivotinje', 'datumPodaciKvaliteta', 'kolicinaMleka', 'Actoins'];
  public dataSource : KvalitetMleka[];

  constructor(private http: HttpClient,
    private kvalitetMlekaService: KvalitetMlekaService,
    public dialog: MatDialog,) {
    this.kvalitetMlekaService.get().subscribe(data => this.dataSource = data);
  }

  ngOnInit(): void {
  }

  add() {
    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //   width: '250px',
    // }).afterClosed().subscribe(result => {
    //   if (result) {
    //     this.mlekaraService.post(result).subscribe((response) => {
    //       console.log("response: ");
    //       console.log(response);
    //       this.mlekaraService.get().subscribe(data => this.dataSource = data);
    //     }, (result) => {
    //       this.dialog.open(DialogOk, {
    //         width: '450px',
    //         data: { errorText: result.error.text }
    //       });
    //       console.log("errorText: " + result.error.text);
    //       console.log(result);
    //     })
    //   }
    // });
  }

  update(date: Date) {
    this.kvalitetMlekaService.getById(date).subscribe(kvalitetMleka => {
      this.dialog.open(UpdateKvalitetMlekaDialog, {
        width: '250px',
        data: kvalitetMleka
      }).afterClosed().subscribe(result => {
        if (result) {
          this.kvalitetMlekaService.put(result).subscribe((response) => {
            console.log("response: ");
            console.log(response);
            this.kvalitetMlekaService.get().subscribe(data => this.dataSource = data);
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
    // const dialogRef = this.dialog.open(DialogYesNo, {
    //   width: '250px',
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.mlekaraService.delete(id).subscribe(() => {
    //       this.mlekaraService.get().subscribe(data => this.dataSource = data);
    //     });
    //   }
    // });
  }

}
