import { Component } from '@angular/core';
import { MaterialModule } from '@angular/material';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PCComponent {
  tiles = [
    {text: 'Questionnaire', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Design', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Properties', cols: 1, rows: 1, color: '#DDBDF1'},
     {text: 'Short-Cuts', cols: 1, rows: 1, color: 'lightgreen'},
  ];
}
