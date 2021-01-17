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
import { HttpClientModule } from '@angular/common/http';
import { MlekaraService } from './services/mlekara.service';
import { DialogOverviewExampleDialog } from './components/mlekara/dialogs/add-mlekara.dialog/addMlekara.dialog';
import { FormsModule } from '@angular/forms';
import { DialogYesNo } from './share/dialog-yes-no/yes-no.dialog';
import { DialogOk } from './share/dialog-ok/ok.dialog';
import { UpdateMlekaraDialog } from './components/mlekara/dialogs/update-mlekara.dialog/updateMlekara.dialog';
import { ObracunComponent } from './components/obracun/obracun.component';
import { ObracunService } from './services/obracun.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,

    DialogOverviewExampleDialog,
    UpdateMlekaraDialog,
    DialogYesNo,
    DialogOk,
    ObracunComponent,
    
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

  ],
  providers: [MlekaraService, ObracunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
