import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Krava } from "src/app/models/krava";

@Component({
    selector: 'update-krava-dialog',
    templateUrl: 'update-krava.dialog.html',
    styleUrls: ['./update-krava.dialog.scss']
  })
  export class UpdateKravaDialog {

    krava: Krava;

    constructor(
      public dialogRef: MatDialogRef<UpdateKravaDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        this.krava = data;
      }
  
    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onYesClick(): void {
      this.dialogRef.close(this.krava);
    }
}