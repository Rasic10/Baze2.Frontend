import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Mlekara } from "src/app/models/mlekara";

@Component({
    selector: 'add-mlekara-dialog',
    templateUrl: 'add-mlekara.dialog.html',
    styleUrls: ['./add-mlekara.dialog.scss']
  })
  export class DialogOverviewExampleDialog {

    mlekara: Mlekara;

    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        this.mlekara = new Mlekara();
        console.log(this.mlekara);
      }
  
    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onYesClick(): void {
      this.dialogRef.close(this.mlekara);
    }
}