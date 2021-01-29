import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PodaciOMuzi } from "src/app/models/podaci-o-muzi";

@Component({
    selector: 'update-podaci-o-muzi-dialog',
    templateUrl: 'update-podaci-o-muzi.dialog.html',
    styleUrls: ['./update-podaci-o-muzi.dialog.scss']
  })
  export class UpdatePodaciOMuziDialog {

    podaciOMuzi: PodaciOMuzi;

    constructor(
      public dialogRef: MatDialogRef<UpdatePodaciOMuziDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        this.podaciOMuzi = data;
      }
  
    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onYesClick(): void {
      this.dialogRef.close(this.podaciOMuzi);
    }
}