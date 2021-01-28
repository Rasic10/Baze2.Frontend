import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { KvalitetMleka } from "src/app/models/kvalitet-mleka";

@Component({
    selector: 'add-kvalitet-mleka-dialog',
    templateUrl: 'add-kvalitet-mleka.dialog.html',
    styleUrls: ['./add-kvalitet-mleka.dialog.scss']
  })
  export class AddKvalitetMlekaDialog {

    kvalitetMleka: KvalitetMleka;

    constructor(
      public dialogRef: MatDialogRef<AddKvalitetMlekaDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        this.kvalitetMleka = new KvalitetMleka();
      }
  
    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onYesClick(): void {
      this.dialogRef.close(this.kvalitetMleka);
    }
}