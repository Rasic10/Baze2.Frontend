import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface ErrorMessage {
  errorText: string;
}

@Component({
    selector: 'ok-dialog',
    templateUrl: 'ok.dialog.html',
    styleUrls: ['./ok.dialog.scss']
  })
  export class DialogOk {

    constructor(
      public dialogRef: MatDialogRef<DialogOk>,
      @Inject(MAT_DIALOG_DATA) public data: ErrorMessage,
      ) {}
  
    onOkClick(): void {
      this.dialogRef.close(true);
    }
}