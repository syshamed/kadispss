import { Component } from '@angular/core';


@Component({
  selector: 'settings-dialog',
  template: `
    <label>Would you like dog pics every min???</label>
    <md-slide-toggle></md-slide-toggle>
  `
})
export class SettingsDialog {

}