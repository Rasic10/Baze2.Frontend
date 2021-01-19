import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Krava, Pol, Rasa } from "src/app/models/krava";

@Component({
    selector: 'add-krava-dialog',
    templateUrl: 'add-krava.dialog.html',
    styleUrls: ['./add-krava.dialog.scss']
})
export class AddKravaDialog {

    krava: Krava;
    pol: any;

    constructor(
        public dialogRef: MatDialogRef<AddKravaDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            this.krava = new Krava();
            this.krava.rasa = new Rasa(); 
        }

    onNoClick(): void {
        this.dialogRef.close(false);
    }

    onYesClick(): void {
        this.krava.datumRodjenja = new Date();
        if (this.pol === 0 || this.pol === 'M') this.krava.pol = Pol.M;
        if (this.pol === 1 || this.pol === 'Z') this.krava.pol = Pol.Z;
        console.log("add" + this.krava);
        this.dialogRef.close(this.krava);
    }
}