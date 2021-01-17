import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Mlekara } from "src/app/models/mlekara";

@Component({
    selector: 'update-mlekara-dialog',
    templateUrl: 'update-mlekara.dialog.html',
    styleUrls: ['./update-mlekara.dialog.scss']
  })
  export class UpdateMlekaraDialog {

    mlekara: Mlekara;

    constructor(
      public dialogRef: MatDialogRef<UpdateMlekaraDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        this.mlekara = data;
      }
  
    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onYesClick(): void {
      this.dialogRef.close(this.mlekara);
    }
}