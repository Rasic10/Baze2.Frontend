import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Obracun } from "src/app/models/obracun";

@Component({
    selector: 'update-obracun-dialog',
    templateUrl: 'update-obracun.dialog.html',
    styleUrls: ['./update-obracun.dialog.scss']
  })
  export class UpdateObracunDialog {

    obracun: Obracun;

    constructor(
      public dialogRef: MatDialogRef<UpdateObracunDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        this.obracun = data;
        console.log(this.obracun);
      }
  
    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onYesClick(): void {
      this.dialogRef.close(this.obracun);
    }
}