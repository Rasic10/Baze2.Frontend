import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { KvalitetMleka } from "src/app/models/kvalitet-mleka";

@Component({
    selector: 'update-kvalitet-mleka-dialog',
    templateUrl: 'update-kvalitet-mleka.dialog.html',
    styleUrls: ['./update-kvalitet-mleka.dialog.scss']
  })
  export class UpdateKvalitetMlekaDialog {

    kvalitetMleka: KvalitetMleka;

    constructor(
      public dialogRef: MatDialogRef<UpdateKvalitetMlekaDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        this.kvalitetMleka = data;
      }
  
    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onYesClick(): void {
      this.dialogRef.close(this.kvalitetMleka);
    }
}