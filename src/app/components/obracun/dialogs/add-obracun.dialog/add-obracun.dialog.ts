import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Obracun } from "src/app/models/obracun";

@Component({
    selector: 'add-obracun-dialog',
    templateUrl: 'add-obracun.dialog.html',
    styleUrls: ['./add-obracun.dialog.scss']
  })
  export class AddObracunDialog {

    obracun: Obracun;

    constructor(
      public dialogRef: MatDialogRef<AddObracunDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        this.obracun = new Obracun();
        console.log(this.obracun);
      }
  
    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onYesClick(): void {
      this.obracun.datumObracuna = new Date();
      this.dialogRef.close(this.obracun);
    }
}