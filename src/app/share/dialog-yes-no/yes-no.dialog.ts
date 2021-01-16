import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Mlekara } from "src/app/models/mlekara";

@Component({
    selector: 'yes-no-dialog',
    templateUrl: 'yes-no.dialog.html',
    styleUrls: ['./yes-no.dialog.scss']
  })
  export class DialogYesNo {

    constructor(
      public dialogRef: MatDialogRef<DialogYesNo>,
      ) {}
  
    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onYesClick(): void {
      this.dialogRef.close(true);
    }
}