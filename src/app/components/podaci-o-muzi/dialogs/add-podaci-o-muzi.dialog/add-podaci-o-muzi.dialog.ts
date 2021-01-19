import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PodaciOMuzi } from "src/app/models/podaci-o-muzi";

@Component({
    selector: 'add-podaci-o-muzi-dialog',
    templateUrl: 'add-podaci-o-muzi.dialog.html',
    styleUrls: ['./add-podaci-o-muzi.dialog.scss']
  })
  export class AddPodaciOMuziDialog {

    podaciOMuzi: PodaciOMuzi;

    constructor(
      public dialogRef: MatDialogRef<AddPodaciOMuziDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        this.podaciOMuzi = new PodaciOMuzi();
      }
  
    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onYesClick(): void {
      // TODO: find a better solution for set datetime in object with just time
      if(this.podaciOMuzi.vremeMuze) {
        let v = this.podaciOMuzi.vremeMuze.toString().split(':');
        let today = new Date();
        this.podaciOMuzi.vremeMuze = new Date(today.getFullYear(), today.getMonth(), today.getDate(), +v[0], +v[1], 0);
      
        this.dialogRef.close(this.podaciOMuzi);
      }
    }
}