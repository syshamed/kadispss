import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig, MdSlideToggle} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   @ViewChild('sidenav') sidenav: MdSidenav;
  isDarkTheme = false;

  constructor(public dialog: MdDialog, public vcr: ViewContainerRef) {}

  /*openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingsDialog, config);
  }*/
}
