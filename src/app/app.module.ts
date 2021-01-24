import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

import { HttpClientModule } from '@angular/common/http';
import { MlekaraService } from './services/mlekara.service';
import { DialogOverviewExampleDialog } from './components/mlekara/dialogs/add-mlekara.dialog/addMlekara.dialog';
import { FormsModule } from '@angular/forms';
import { DialogYesNo } from './share/dialog-yes-no/yes-no.dialog';
import { DialogOk } from './share/dialog-ok/ok.dialog';
import { UpdateMlekaraDialog } from './components/mlekara/dialogs/update-mlekara.dialog/updateMlekara.dialog';
import { ObracunService } from './services/obracun.service';
import { KravaService } from './services/krava.service';
import { PolPipe } from './share/pipe-pol/PolPipe';
import { RasaPipe } from './share/pipe-pol/RasaPipe';
import { PodaciOMuziService } from './services/podaci-o-muzi.service';
import { AddPodaciOMuziDialog } from './components/podaci-o-muzi/dialogs/add-podaci-o-muzi.dialog/add-podaci-o-muzi.dialog';
import { UpdateKravaDialog } from './components/krava/dialogs/update-krava.dialog/update-krava.dialog';
import { ZaposlenService } from './services/zaposleni.service';
import { AddZaposlenDialog } from './components/zaposlen/dialogs/add-zaposleni.dialog/add-zaposlen';
import { AddKravaDialog } from './components/krava/dialogs/add-krava.dialog/add-krava.dialog';
import { AddObracunDialog } from './components/obracun/dialogs/add-obracun.dialog/add-obracun.dialog';
import { UpdateObracunDialog } from './components/obracun/dialogs/update-obracun.dialog/update-obracun.dialog';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,

    // dialogs
    DialogOverviewExampleDialog,
    UpdateMlekaraDialog,
    AddPodaciOMuziDialog,
    UpdateKravaDialog,
    AddZaposlenDialog,
    AddKravaDialog,
    AddObracunDialog,
    UpdateObracunDialog,

    // share dialogs
    DialogYesNo,
    DialogOk,
    
    // my custom pipes
    RasaPipe,
    PolPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    HttpClientModule,

    // Material
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,

    //
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,

  ],
  providers: [MlekaraService, ObracunService, KravaService, PodaciOMuziService, ZaposlenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
