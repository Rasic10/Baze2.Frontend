import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Zaposlen } from "src/app/models/zaposlen";

@Component({
    selector: 'add-zaposlen-dialog',
    templateUrl: 'add-zaposlen.dialog.html',
    styleUrls: ['./add-zaposlen.dialog.scss']
  })
  export class AddZaposlenDialog {

    zaposlen: Zaposlen;

    constructor(
      public dialogRef: MatDialogRef<AddZaposlenDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        this.zaposlen = new Zaposlen();
      }
  
    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onYesClick(): void {
      this.dialogRef.close(this.zaposlen);
    }
}